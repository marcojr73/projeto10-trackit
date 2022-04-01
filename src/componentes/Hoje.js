import Footer from "./Footer"
import Top from "./Top"
import { useContext } from "react"
import DataContext from "./context/context"
import dayjs, { Dayjs } from "dayjs"
import styled from "styled-components"

import ListToDay from "./listToDay"
export default function Today(){

    return(
        <ContainerToday>
            <Top/>
                <div className="head">
                    <p className="date">{dayjs().locale('pt-br').format('dddd, DD/MM')}</p>
                    <p className="percent">nenhum hábito concluido ainda</p>
                </div>
                <ListToDay/>
            <Footer/>
        </ContainerToday>
    )
}

const ContainerToday = styled.div`
    margin: auto;
    font-family: Lexend Deca;
    background: #E5E5E5;
    height: 100vh;

    .date{
        font-size: 22px;
        color: #126BA5;
        margin-top: 28px;
        font-size: 23px;
        font-weight: 400;
        text-align: left;
        margin-bottom: 3px;
    }

    .percent{
        font-size: 17px;
    }

    .head{
        width: 340px;
        height: 107px;
        display: flex;
        flex-direction: column;
        margin: auto;
    }

    .habit{
        width: 340px;
        height: 107px;
        margin: auto;
        background: #FFFFFF;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .txt{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 15px;
    }

    .title{
        font-size: 20px
    }

    .check{
        width: 69px;
        height: 69px;
        background: #E7E7E7;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 13px;

    }
`