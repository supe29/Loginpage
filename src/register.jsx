import React, { useState } from "react"
import axios from "axios";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, SetName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

    const formData   = new FormData();
    formData.append('Full name', name);
    formData.append('email', email);
    formData.append('password', pass);

    axios
    .post('http://localhost:5000/register', formData, {
        headers:{
            'Content-type': 'multipart/form-data',
        },
    })
    .then((Response) => {
        console.log(Response.log)
    })
    .catch((error) => {
        console.error(error)
    });
    };  


    return (
      <div  className="auth-form-container">     
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name" >Full name</label>
            <input value={name} onChange={(e) => SetName(e.target.value)} type="name" placeholder="Full name" id="name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="username@gmail,com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? login</button>
    </div>      
    )

}