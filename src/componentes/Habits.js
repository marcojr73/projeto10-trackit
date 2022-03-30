import Top from "./Top"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"
import Info from "./info"

export default function Habits(){
    return(
        <Container>
            <Top/>
            <Header/>
            <Info/>
            <Footer/>
        </Container>
    )
}

const Container = styled.main`
    width:100vw;
    height: 900px;
    background: #E5E5E5;
`