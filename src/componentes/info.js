import styled from "styled-components"

export default function Info(){
    return(
        <Container>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Container>
    )
}

const Container = styled.p`
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    width: 338px;
    margin: auto;
    color: #666666;
    margin-top: 28px;
    

`