import React, { useState } from "react";
import "./Signin.css";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const userCredintials = await createUserWithEmailAndPassword(auth, email, password);
        }
        catch (e) {
            alert(e);
        }
    }
    return (
        <div className="signin-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="number" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign In</button>
            </form>



        </div>

    );
}
export default Signin;