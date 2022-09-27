import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const Contact = ({key, data }) => {
 
    return (
        <div>
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <ListItem key={key}>
                <ListItemAvatar>
                    <Avatar src={data.photo}>                                   
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={data.name} secondary={
                    <div>
                        <div>{data.phone}</div>
                        <div>{data.email}</div>
                    </div>
                }/>
                </ListItem>
        </List>
        </div>
    );
    
};

export default Contact;
