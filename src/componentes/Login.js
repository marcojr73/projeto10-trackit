import { Link, useNavigate } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import axios from "axios"

import Container from "./layout/start" 
import Loader from "./layout/loader"
import logo from "../assets/images/logo.png"

export default function Login(){
    const navigate = useNavigate()
    
    function logUser(e){
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const data = {email: "marcojunior@engenharia.ufjf.br", password: "4815"}
        e.preventDefault();

        console.log(url, data)
        const promisse = axios.post(url, data)

        promisse.then(response => {
            const data = response.data;
            console.log(data)
            const handle = JSON.stringify(data)
            localStorage.setItem("user", handle)
            navigate("/hoje")
        })
        promisse.catch(err => {
            alert("usuário não encontrado")
        })
    }

    return(
        <Container>
            <img src={logo} alt="logo"/> 
            <form onSubmit={logUser} >
                <button className="sub" type="submit" >load</button>
            </form>
            <Link to="/cadastro">
                <p className="to-register">Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    )
}


