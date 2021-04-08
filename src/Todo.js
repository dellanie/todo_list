import React from 'react'
import { List , } from "@material-ui/core";
import { ListItemText } from '@material-ui/core';
import { ListItem } from '@material-ui/core';


function Todo(props) {
    return (
        <List ClassName="todo_list">
            <ListItem>
                <ListItemText  primary={props.text} secondary="ACTIVE DEADLINE"/>
            </ListItem> 
        </List>
    )
}

export default Todo
