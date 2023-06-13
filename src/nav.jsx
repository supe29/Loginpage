import React, { useState } from "react"

export const NavBar = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    }    

    return (
    <div className="nav-container" onSubmit={handleSubmit}>     
       <nav>
            
       <button className="link-btn-login" onClick={() => props.onFormSwitch('register')}>Login</button>
        </nav>
        
    </div>    
    )


}