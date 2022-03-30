import styled from "styled-components"
import track from "../assets/images/track.png"

export default function Top(){
    return(
        <Container>
            <img className="logo" src={track} />
            <img className="profile" src={track} />
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

    .logo{
        width: 115px;
        height: 49px;
        margin-left: 18px;
    }

    .profile{
        width: 51px;
        height: 51px;
        border-radius: 50%;
        margin-right: 18px;
    }
`