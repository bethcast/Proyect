"use client"
import React from "react"
import {login} from "../../services/firebase/auth"
import {Textfield, Stack} from '@mui/material';
i


export default function Login() {

    const [state,setState] = React.useState({ 
        email: "",
        password:""
    })

    function onChange(event){

        const value = event.target.value;
        const name = event.target.name;
        setState({
            ...state,
            [name]: value
        })
    }

    function onLogin(){
        /*
        const email =stae.email;
        const password =stae.password;

        esta linea es lo mismo que lo que esta escrito en la parte inferior.
        */

        const{email, password} = state;

        login(email, password);
    }

    return (
        <Stack
        width='500 px'
        spacing={2} // 1-8px
        p="10px"
        m={4}
        >
            
                <Textfield 
                name="email" 
                onChange={onChange} 
                value={state.email} 
                id="email" 
                type="text" 
                placeholder="user@e-mail.com"/>
                <br></br>
               
                <Textfield 
                name="password" 
                onChange={onChange} 
                value={state.password}
                 type="password" 
                 id="" 
                 placeholder="password"/>
                <br></br>
                <div class ="checkbox">
                <input type="checkbox"/>
                <p>recordar</p>
                </div> <br></br>

                <button onClick={onLogin} 
                class="button" 
                type="button" 
                value="Login">Login</button>

            </Stack>
        )
    }
