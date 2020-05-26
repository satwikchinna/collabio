import React from 'react';
import '../css/home/list.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import {useState,useEffect} from 'react';
import Loading from '../components/loadingComponent';



const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      marginTop:'10%'
    },
    width: '78%',
    marginTop:'5%',
    backgroundColor: theme.palette.background.default,
    float:'right',
    fontWeight:"fontWeightBold"
    
  },
  
}));


function Datagrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("http://192.168.43.154:2345/tasks")
    .then(data => {
      return data.json();
    }).then(data => {
      console.log(data)
      setProjects(data);
      setLoading(false);
      })
      .catch(err => {
        console.log(123123);
      });
  }, []);
  
  const classes = useStyles();
  if(loading){
    return(
      <div className="projects">
 <Loading/>
   </div>
    );
  }
  else{
    return (
      <div className="users">
      
      <List className={classes.root}>
      {projects.map((project, index) => ( 
        <div key={index}> 
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar >
        <ListItemText primary={project.title} secondary="Jan 9, 2014" />
       
      </ListItem>
      </div>
       ))}
      </List>
     
      </div>
    );
  }}

  
  export default Datagrid;