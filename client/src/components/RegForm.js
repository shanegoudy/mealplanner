import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegForm = (props) => {
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    
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
                console.log(res.data.error);
                if(res.data.error){
                    setErrors(res.data.error.errors);
                    console.log(res.data.error.errors);
                } else {
                    navigate('/');
                }
            })
            .catch(err=>{
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Register</h1>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>{
                errors.firstName ? 
                errors.firstName.message : null
            }</p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            <p>{
                errors.lastName ? 
                errors.lastName.message : null
            }</p>
            <p>
                <label>Email</label><br/>
                <input type="text" onChange = {(e)=>setEmail(e.target.value)}/>
            </p>
            <p>{
                errors.email ? 
                errors.email.message : null
            }</p>
            <p>
                <label>Password</label><br/>
                <input type="text" onChange = {(e)=>setPassword(e.target.value)}/>
            </p>
            <p>{
                errors.password ? 
                errors.password.message : null
            }</p>
            {/* <p>
                <label>Confirm Password</label><br/>
                <input type="text" onChange = {(e)=>setConfirmPassword(e.target.value)}/>
            </p> */}
            <input type="submit"/>
        </form>
    )
}
export default RegForm;

