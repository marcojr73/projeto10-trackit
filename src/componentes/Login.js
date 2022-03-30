import { Link } from "react-router-dom"

import logo from "../assets/images/logo.png"
import Container from "./layout/start" 

export default function Login(){

    
    return(
        <Container>
            <img src={logo}/> 
            <form >
                <input className="e-mail" placeholder="email" type="email"></input>
                <input className="pass" placeholder="senha" type="password"></input>
                {/* <Link to="/habitos"> */}
                    <button className="sub" type="submit" >Entrar</button>
                {/* </Link> */}
            </form>
            <Link to="/cadastro">
                <p className="to-register">Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    )
}


