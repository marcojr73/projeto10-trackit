import { Link, useNavigate, useParams } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import axios from "axios"
import logo from "../assets/images/logo.png"
import Container from "./layout/start" 
import Loader from "./loader"

export default function Login(){

    const [load, setLoad] = useState("entrar")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const objLogin = {email:email, password:password}
    const navigate = useNavigate();

    function logUser(e){
        e.preventDefault();

        const promisse = axios.post(url,objLogin);
        setLoad(<Loader/>)
        promisse.then(response => {
            const {data} = response;
            console.log(data)
            navigate("/habitos", {state: data})
        })
        promisse.catch(err => {
            setLoad("entrar")
            alert("usuário não encontrado")
            console.log(err.response)
        })
    }

    return(
        <Container>
            <img src={logo}/> 
            <form onSubmit={logUser} >
                <input  value={email} onChange={(e)=>setEmail(e.target.value)} className="e-mail" placeholder="email" type="email"></input>
                <input  value={password} onChange={(e)=>setPassword(e.target.value)} className="pass" placeholder="senha" type="password"></input>
                <button className="sub" type="submit" >{load}</button>
            </form>
            <Link to="/cadastro">
                <p className="to-register">Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    )
}


