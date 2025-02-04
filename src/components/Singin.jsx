import React, { useState } from "react";
import "./Signin.css";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
const [name , setName] = useState("");
const [age , setAge] = useState("");
const [phone , setPhone] = useState("");
const [location , setLocation] = useState("");
const [gender , setGender] = useState("");

    async function handleSignin(e) {
        e.preventDefault();
        try {
            const userCredintials = await createUserWithEmailAndPassword(auth, email, password);
            navigate("/login");
        }
        catch (e) {
            alert(e);
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        const data = {
          name:name,
          age:age,
          email:email,
          phone:phone,
          location:location,
          gender:gender,
        }
      }
    return (
    <div className="signin-container">
    <h1>Sign In</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}  required />
      </label>

      <label htmlFor="age">
        Age:
        <input type="number" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)}  required />
      </label>

      <label htmlFor="email">
        Email:
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
<label htmlFor="password">
    Password:
    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
</label>
      <label htmlFor="phone">
        Phone:
        <input type="tel" name="phone" id="phone"  value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>

      <label htmlFor="location">
        Address:
        <input type="text" name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </label>  
      <button type="submit" onClick={handleSignin}>sign In</button>
    </form>
  </div>
  );
}
export default Signin;