import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

import Container from "./layout/start" 
import Loader from "./layout/loader"
import logo from "../assets/images/logo.png"
import { useState } from "react"

export default function Login(){
    const [load, setLoad] = useState("Entrar")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const navigate = useNavigate()
    
    function logUser(e){
        const objLogin = {email:email, password:password}
        e.preventDefault();

        console.log(url, objLogin)
        const promisse = axios.post(url, objLogin)
        setLoad(<Loader/>)

        promisse.then(response => {
            const data = response.data;
            console.log(data)
            const handle = JSON.stringify(data)
            localStorage.setItem("user", handle)
            navigate("/hoje")
        })
        promisse.catch(err => {
            setLoad("Entrar")
            alert("usuário não encontrado")
        })
    }

    return(
        <Container>
            <img src={logo} alt="logo"/> 
            <form onSubmit={logUser} >
                <input  value={email}
                        onChange={(e)=>setEmail(e.target.value)} 
                        className="e-mail" 
                        placeholder="email" 
                        disabled={load !== "Entrar" ? true : false}
                        type="email">
                </input>
                <input  value={password} 
                        onChange={(e)=>setPassword(e.target.value)} 
                        className="pass" 
                        placeholder="senha" 
                        disabled={load !== "Entrar" ? true : false}
                        type="password">
                        
                </input>
                <button className="sub" type="submit" >{load}</button>
            </form>
            <Link to="/cadastro">
                <p className="to-register">Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    )
}


