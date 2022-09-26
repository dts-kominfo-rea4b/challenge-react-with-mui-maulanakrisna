// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            {
               data.map((datum, index) => {
                    return (
                        <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar>
                                    <img src={datum.photo} alt={datum.photo}/>
                                </Avatar>

                            </ListItemAvatar>
                            <ListItemText primary={datum.name} secondary={
                                <div>
                                    <div>{datum.phone}</div>
                                    <div>{datum.email}</div>
                                </div>
                            }/>
                        </ListItem>
                    );
                }
            
                )
            }
        </List>
    );
    
};

export default Contact;
