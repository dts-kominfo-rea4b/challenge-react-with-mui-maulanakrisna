import React, { useState } from "react";
import {TextField, Button, Card, CardContent, CardActions} from "@mui/material";

const ContactForm = ({ clickHandler }) => {

    const[name, setName] = useState("");
    const[phone, setPhone] = useState("");
    const[email, setEmail] = useState("");
    const[photo, setPhoto] = useState("");

    return (
        <div>
            <Card variant="outlined">
                <CardContent>
                    <TextField
                        label="Name"
                        variant="filled"
                        required  
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                    <TextField
                        label="Phone"
                        variant="filled"
                        required
                        value={phone}
                        onChange={(e) => {setPhone(e.target.value)}}
                    />
                    <TextField
                        label="Email"
                        variant="filled" 
                        required  
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}   
                    />
                    <TextField
                        label="Photo URL"
                        variant="filled" 
                        required
                        value={photo}
                        onChange={(e) => {setPhoto(e.target.value)}}     
                    />
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        onClick={() => {
                            const contact = {name: name, email: email, phone: phone, photo: photo}
                            clickHandler(contact);
                            setName("");
                            setPhone("");
                            setEmail("");
                            setPhoto("");
                        }}
                    >
                    ADD NEW
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default ContactForm;