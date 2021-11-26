import React from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';

const Sidebar = (props) => {
    return(
      
            <Drawer
            anchor="right"
            open={props.open} 
            onClose={() => props.onClose(false)}
            >
              <List component="nav">
                    <ListItem button onClick={()=> alert('click')}>
                        NAme of items
                    </ListItem>
              </List>
            </Drawer>
      
    )
}

export default Sidebar;