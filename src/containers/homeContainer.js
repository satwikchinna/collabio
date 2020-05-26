import React from 'react';
import ResponsiveDrawer from '../components/sidenavbarComponent';
import Datagrid from '../components/datagridComponent';
import FloatingActionButton from '../components/actionbuttonComponent';
function Home() {
  return (
    <>
   <div>
  

      <Datagrid/>
       < ResponsiveDrawer/>
       <FloatingActionButton/>
      
       
    </div>
    
      
   
    </>
  );
}

export default Home;