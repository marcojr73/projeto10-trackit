import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import axios from "axios"

import styled from "styled-components"

import logo from "../assets/images/logo.png"
import Container from "./layout/start" 
import Loader from "./loader"

export default function Register(){
    // const [data, setData] = useState({email:"",name:"",image:"",password:""})
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [load, setLoad] = useState("Cadastrar")
    const navigate = useNavigate();
    

    function registerProfile(e){
        e.preventDefault();
        const post = {
            email: email,
            name: name,
            image: image,
            password: password,
        }
        console.log(post)
        setLoad(<Loader/>)
        const promisse = axios.post(url, post);

        promisse.then(response => {
            const {data} = response;
            console.log(data);
            navigate("/")
        })
        promisse.catch(err => {
            console.log(err.response)
            setLoad("Registrar")
        })
        
        
    }

    return(
        <Container>
            <img src={logo}/> 
            <form onSubmit={registerProfile}>
                <input required value={email} onChange={(e)=>setEmail(e.target.value)} className="e-mail" placeholder="email" type="email"></input>
                <input required value={password} onChange={(e)=>setPassword(e.target.value)} className="pass" placeholder="senha" type="password"></input>
                <input required value={name} onChange={(e)=>setName(e.target.value)} className="name" placeholder="nome" type="text"></input>
                <input required value={image} onChange={(e)=>setImage(e.target.value)} className="pic" placeholder="foto (url)" type="text"></input>
                <button className="send" type="submit" >{load}</button>
            </form>
            <Link to="/">
                <p className="to-log">Já tem uma conta? faça login</p>
            </Link>
        </Container>
    )
}

