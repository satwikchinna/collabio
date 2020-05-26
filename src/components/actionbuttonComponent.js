import React from 'react'
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    margin: {

      margin: "0px",
      top: "auto",
      right: "20px",
      bottom: "20px",      
     left: "auto",
      position: "fixed",
      
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
      outline: 'none',
      focusVisible:'false'
    },
  }));
  const styles = {
    outline:'none'
  }
  
  export default function FloatingActionButton() {
    const classes = useStyles();
  
    return (
        <div>
          <div>
            <Fab size="medium" style = {styles} color="primary" aria-label="add" className={classes.margin}>
              <AddIcon />
            </Fab>
            
          </div>
       
        </div>
      );
    }