import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import '../css/home/sidebar.css'
import { FiHome } from 'react-icons/fi';
import { AiOutlineProject } from 'react-icons/ai';


function Sidebar() {
  return (
    <div className="sidebar">
    <List  disablePadding dense>
      <ListItem className="sidebarlist" button>
        <ListItemText><h5><FiHome/> Home </h5></ListItemText>
      </ListItem>
      <ListItem className="sidebarlist" button>
        <ListItemText><h5><AiOutlineProject/> My projects</h5></ListItemText>
      </ListItem>
      <ListItem className="sidebarlist" button>
        <ListItemText><h5><FiHome/> Home </h5></ListItemText>
      </ListItem>
    </List>
    </div>
  )
}

export default Sidebar