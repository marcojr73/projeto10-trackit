import { Link, useNavigate } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import axios from "axios"

import Container from "./layout/start" 
import Loader from "./layout/loader"
import logo from "../assets/images/logo.png"

export default function Login(){
    
    function logUser(e){
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const objLogin = {email:"email", password:"password"}
        e.preventDefault();

        console.log(url, objLogin)
        const promisse = axios.post(url, objLogin)

        promisse.then(response => {
            const data = response.data;
            console.log(data)
            const handle = JSON.stringify(data)
            localStorage.setItem("user", handle)
        })
        promisse.catch(err => {
            alert("usuário não encontrado")
        })
    }

    return(
        <Container>
            <img src={logo} alt="logo"/> 
            <form onSubmit={logUser} >
                <input  value={"email"}
                        className="e-mail" 
                        placeholder="email" 
                        type="email">
                </input>
                <input  value={"password"} 
                        className="pass" 
                        placeholder="senha" 
                        type="password">
                        
                </input>
                <button className="sub" type="submit" >load</button>
            </form>
            <Link to="/cadastro">
                <p className="to-register">Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    )
}


