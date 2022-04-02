import styled from "styled-components";
import Footer from "./Footer";
import Top from "./Top";

export default function Historic(){
    return(
        <>
            <Top/>
                <ContainerHistoric>
                    <h1 className="title">Histórico</h1>
                    <h1 className="wait">Em breve você poderá ver o histórico dos seus hábitos aqui</h1>
                </ContainerHistoric>
            <Footer/>
            </>
    )
}

const ContainerHistoric = styled.main`
    width: 100vw;
    height: 100vh;
    margin: auto;
    font-family: 'Lexend Deca';
    background: #E5E5E5;

    .title, .wait{
        width: 340px;
        margin: auto;
    }

    .title{       
        padding-top: 28px;
    }
    .wait{
        padding-top: 17px;
    }
`