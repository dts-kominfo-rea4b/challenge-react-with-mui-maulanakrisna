import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const Contact = ({ data }) => {
 
    return (
        <div>
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            
            {data.map((contact, index) => {
                return (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar src={contact.photo}>                                   
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={contact.name} secondary={                                <div>
                                    <div>{contact.phone}</div>
                                    <div>{contact.email}</div>
                                </div>
                            }/>
                    </ListItem>
                );
            })}
        </List>
        </div>
    );
    
};

export default Contact;
