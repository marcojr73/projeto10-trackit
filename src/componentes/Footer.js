import { Link } from "react-router-dom"
import { CircularProgressbar } from 'react-circular-progressbar';
import { buildStyles } from "react-circular-progressbar";
import { useContext } from "react";

import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components"
import {DataContext} from "./context/context";

export default function Footer() {
    const {percent} = useContext(DataContext)
    return (
        <Foot>
            <Link to="/habitos"><p>Hábitos</p></Link>
            <Link to="/hoje">
                <div className="progress">
                    <CircularProgressbar
                        value={percent}
                        maxValue={1}
                        text={"Hoje"}
                        styles={buildStyles({
                            pathTransitionDuration: 0.5,
                            pathColor: `#FFF`,
                            trailColor: "#52B6FF",
                            textColor: '#FFF'
                        })}
                    />
                </div>
            </Link>
            <Link to="/historico"><p>Histórico</p></Link>
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
    font-family: 'Lexend Deca';

    a{
        text-decoration: none;
        color: #52B6FF;
    }

    .progress{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        padding: 5px;
        width: 91px;
        height: 91px;
        background: #52B6FF;
        border-radius: 50%;
    }
`