import styled from "styled-components"

export default function Footer(){
    return(
        <Foot>
            <p>Hábitos</p>
            <div>circle</div>
            <p>Histórico</p>
        </Foot>
    )
}

const Foot = styled.footer`
    width: 100%;
    height: 70px;
    background: #52B6FF;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    color: #FFFFFF;
`