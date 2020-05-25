import React from 'react';
import '../css/home/list.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';



const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      marginTop:'6%'
    },
    width: '74%',
    backgroundColor: theme.palette.background.default,
    float:'right',
    fontWeight:"fontWeightBold"
    
  },
  
}));
var users =[
  {
    name: '😃 William',
    location: '🏘️ Lagos',
    car: '🚘 Honda'
  },
  {
    name: '😃 Chris',
    location: '🏘️ Moon',
    car: '🚘 Tesla'
  },
  {
    name: ' 😃 Rose',
    location: '🏘️ Venice',
    car: '🚘 Pagani'
  },
  {
    name: '😃 Mike',
    location: '🏘️ Milan',
    car: '🚘 Rolls Royce'
  },
  {
    name: '😃 Liz',
    location: '🏘️ Beirut',
    car: '🚘 Mercedes'
  },{
    name: '😃 William',
    location: '🏘️ Lagos',
    car: '🚘 Honda'
  },
  {
    name: '😃 Chris',
    location: '🏘️ Moon',
    car: '🚘 Tesla'
  },
  {
    name: ' 😃 Rose',
    location: '🏘️ Venice',
    car: '🚘 Pagani'
  },
  {
    name: '😃 Mike',
    location: '🏘️ Milan',
    car: '🚘 Rolls Royce'
  },
  {
    name: '😃 Liz',
    location: '🏘️ Beirut',
    car: '🚘 Mercedes'
  }
];

function Datagrid() {
  const classes = useStyles();
    return (
      <div className="users">
      
      <List className={classes.root}>
      {users.map((user, index) => (  
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar >
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
       ))}
      </List>
     
      </div>
    );
  }
  export default Datagrid;