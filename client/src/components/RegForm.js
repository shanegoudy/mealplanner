import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegForm = (props) => {
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users', {
            firstName,
            lastName,
            email,
            password,
            // confirmPassword
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                navigate('/')
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Register</h1>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            <p>
                <label>Email</label><br/>
                <input type="text" onChange = {(e)=>setEmail(e.target.value)}/>
            </p>
            <p>
                <label>Password</label><br/>
                <input type="text" onChange = {(e)=>setPassword(e.target.value)}/>
            </p>
            {/* <p>
                <label>Confirm Password</label><br/>
                <input type="text" onChange = {(e)=>setConfirmPassword(e.target.value)}/>
            </p> */}
            <input type="submit"/>
        </form>
    )
}
export default RegForm;
