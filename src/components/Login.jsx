import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login(){
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState(null);
const navigate = useNavigate();
     async function handleSubmit(e){
e.preventDefault();
try{
const user = await signInWithEmailAndPassword(auth , email , password);
alert("Login successful");
}
catch(e){
    alert(e);
}
    }
function handleSignin(){
    navigate("/signin");
}
    return(
<div className="login-container">
<form onSubmit={handleSubmit} >
<label htmlFor="email">Email:</label>
<input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
<label htmlFor="password">Password</label>
<input type="number" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
<button type="submit">Log In</button>
<p>Don't have account? <strong onClick={handleSignin}>Sign In</strong> </p>
</form>



</div>

    );
}
export default Login;