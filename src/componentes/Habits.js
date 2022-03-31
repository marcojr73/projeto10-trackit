import { useLocation } from "react-router"
import Top from "./Top"
import styled from "styled-components"
import Footer from "./Footer"
import CreateHabit from "./CreateHabit"
import Info from "./info"
import { useState } from "react/cjs/react.development"

export default function Habits(){

    const {state} = useLocation();
    const [habits, setHabits] = useState(false)

   
    return(
        <Container>
            <Top state={state}/>
            <section>
                <h1>Meus Hábitos</h1>
                <div onClick={()=>setHabits(!habits)} className="plus">+</div>
            </section>

            <CreateHabit habits={habits} setHabits={setHabits} token={state.token}/>
            <Info/>
            <Footer/>
        </Container>
    )
}

const Container = styled.main`
    width:100vw;
    height: 900px;
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