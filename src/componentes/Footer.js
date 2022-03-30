import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <Foot>
            <Link to="habitos"><p>Hábitos</p></Link>
            <Link to="hoje"><div>circle</div></Link>
            <Link to="historico"><p>Histórico</p></Link>    
        </Foot>
    )
}

const Foot = styled.footer`
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    color: #52B6FF;

    a{
        text-decoration: none;
        color: #52B6FF;
    }
`