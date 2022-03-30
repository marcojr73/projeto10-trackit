import styled from "styled-components"

export default function Header(){
    return(
        <Container>
            <h1>Meus Hábitos</h1>
            <div className="plus">+</div>
        </Container>
    )
}

const Container = styled.div`
    width: 350px;
    margin: auto;
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
    font-family: 'Lexend Deca';
    font-size: 25px;
    color: #126BA5;
    font-weight: 400;


    h1{
    }

    .plus{
        display: flex;
        justify-content: center;
        line-height: 31px;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        color: white;
        background: #52B6FF;
    }
`