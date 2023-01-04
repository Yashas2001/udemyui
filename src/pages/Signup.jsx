import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {firebaseAuth} from "../utils/firebase-config";
import {useNavigate} from "react-router-dom";

export default function Signup() {
  const[showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async() =>{
    try{
      const {email, password} = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    }
    catch(err){
      console.log(err);
  }};

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if(currentUser){ navigate("/")}
  });

  return (
    <Container showPassword={showPassword}>
        <BackgroundImage />
        <div className="content">
          <Header Login/>
          <div className="body flex column a-center j-center">
              <div className="text flex column">
                  <h1>Learn to code by watching others</h1>
                  <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                  <h3>Ready?!!  Enter your email to signup or login</h3>
              </div>
              <div className="form">
                  <input 
                  type="email"
                   placeholder="Email Adress" 
                   onChange={(e)=>
                   setFormValues({...formValues,[e.target.name]: e.target.value})}
                   name="email" 
                   value = {formValues.email}
                  />
                  { showPassword && 
                  <input type="password" placeholder="Password" name="password"  onChange={(e)=>setFormValues({...formValues,[e.target.name]: e.target.value,})}
                  value={formValues.password}
                  />}
                  { !showPassword && <button onClick={()=>setShowPassword(true)}>Get Started</button>}
              </div>
              <button onClick={handleSignIn}>Sign up</button>
          </div>
        </div>
    </Container>
  );
}

const Container = styled.div`
position: relative;
.content{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-row: 15vh 85vh;

    .body{
      gap: 1rem;
      .text{
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1{
          font-size: 3rem;
          padding: 0 1rem;
      }
}
.form{
  display: grid;
  grid-template-columns: ${({showPassword}) => showPassword ? "1fr 1fr" : "2fr 1fr"};
  width:60%;
  input{
    color: black;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border: 1px solid #fff;
    &:focus{
      outline: none;
    }
  }
  button{
    padding: 0.5rem 1rem;
    background-color: #fff
    border: none;
    cursor: pointer;
    color: #000;
    font-weight: bolder;
    font-size: 1.05rem;
}
}
button{
  padding: 0.5rem 1rem;
  background-color: #fff
  border: none;
  cursor: pointer;
  color: #000;
 
  font-weight: bolder;
  font-size: 1.05rem;
}
`;