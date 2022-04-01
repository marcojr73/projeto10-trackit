import { useContext } from "react"
import styled from "styled-components"
import DataContext from "./context/context"

export default function Top(){

    const {token} = useContext(DataContext)
    return(
        <Container>
            <p>Tracklit</p>
            <img className="profile" src={token.image} />
        </Container>
    )
}

const Container = styled.header `
    height: 70px;
    width: 100%;
    background: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-family: Playball;
        font-size: 39px;
        color: #FFFFFF;
        margin-left: 18px;
    }

    .profile{
        width: 51px;
        height: 51px;
        border-radius: 50%;
        margin-right: 18px;
    }
`