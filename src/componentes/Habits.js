import Top from "./Top"
import styled from "styled-components"
import Footer from "./Footer"
import CreateHabit from "./CreateHabit"
import Info from "./info"
import ListHabits from "./ListHabits"
import { useState } from "react"

export default function Habits(){
    const [info, setInfo] = useState(true);
    const [habits, setHabits] = useState(false)
    let [listHabits, setListHabits] = useState([])
    const urlLoad = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const token = JSON.parse(localStorage.getItem("user"))

    return(
        <Container>
            <Top/>
            <section>
                <h1>Meus Hábitos</h1>
                <div onClick={()=>setHabits(!habits)} className="plus">+</div>
            </section>
            <CreateHabit habits={habits} 
                         setHabits={setHabits} 
                         token={token.token} 
                         setListHabits={setListHabits} 
                         urlLoad={urlLoad}/>

            <ListHabits token={token.token} 
                        setInfo={setInfo} 
                        listHabits={listHabits} 
                        setListHabits={setListHabits} 
                        urlLoad={urlLoad}/>

            <Info info={info}/>
            <Footer/>
        </Container>
    )
}

const Container = styled.main`
    width:100vw;
    height: 100vh;
    background: #E5E5E5;

    section{
        width: 350px;
        margin: auto;
        margin-top: 28px;
        display: flex;
        justify-content: space-between;
        font-family: 'Lexend Deca';
        font-size: 25px;
        color: #126BA5;
        font-weight: 400;
        margin-bottom: 20px
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