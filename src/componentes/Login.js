import { Link, useNavigate } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import axios from "axios"

import Container from "./layout/start" 
import Loader from "./layout/loader"
import logo from "../assets/images/logo.png"

export default function Login(){
    return(
        <Container>
            <img src={logo} alt="logo"/> 
            <Link to="/cadastro">
                <p className="to-register">Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    )
}


