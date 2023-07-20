'use client'
import React from "react"
import { singup } from "../../services/auth"
import "./register.css"
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

function register () {

    const [state, setState] = React.useState({
        email: "",
        password: "",
        displayName: ""
    })

    function onChange (event){
        const value = event.target.value;
        const name = event.target.name;


        setState({
            ...state,
            [name]: value
        })
    }

    function onRegister(event){

        event.preventDefault();

        const {email, password, displayName} = state;

        const args = {email,password,displayName}

        singup(args)
    }

    return(
    <div className="conteiner">
        <form onSubmit={onRegister}>
            <input 
            onChange={onChange} 
            name="email" 
            type="email" 
            placeholder="email" 
            value={state.email}
            required
            /> <br></br><br></br>
            

            <input 
            onChange={onChange} 
            name="password" 
            type="password" 
            placeholder="password" 
            value={state.password}
            required
            /><br></br><br></br>
            

            <input
            name="displayName"
            onChange={onChange}
            value={state.displayName}
            placeholder="Your Name"
            type="Text"
            /><br></br><br></br>

            <button type="submit">Register</button>
        </form>
    </div>

        
    )
    

}

export default register;