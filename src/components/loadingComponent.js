import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
   
    display: 'flex',
    '& > * + *': {
        [theme.breakpoints.down('xs')]: {
            top: "10vh",
            right: "46vw",
            bottom: "50vh",      
           left: "auto",
          },
     
      top: "50vh",
      right: "40vw",
      bottom: "50vh",      
     left: "auto",
      position: "fixed",
    },
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
      <CircularProgress color="primary" />
    </div>
  );
}