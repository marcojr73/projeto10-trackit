import { Link, useNavigate } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import axios from "axios"
import logo from "../assets/images/logo.png"
import Container from "./layout/start" 

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const objLogin = {email:email, password:password}
    const navigate = useNavigate();

    function logUser(e){
        e.preventDefault();
        console.log(objLogin);

        const promisse = axios.post(url,objLogin);
        promisse.then(response => {
            const {data} = response;
            console.log(data)
            navigate("/habitos")
        })
        promisse.catch(err => console.log(err.response))
    }

    return(
        <Container>
            <img src={logo}/> 
            <form onSubmit={logUser} >
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className="e-mail" placeholder="email" type="email"></input>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} className="pass" placeholder="senha" type="password"></input>
                <button className="sub" type="submit" >Entrar</button>
            </form>
            <Link to="/cadastro">
                <p className="to-register">Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    )
}


