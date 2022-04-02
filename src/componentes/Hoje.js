import Footer from "./Footer"
import Top from "./Top"
import { useContext, useState } from "react"
import DataContext from "./context/context"
import dayjs, { Dayjs } from "dayjs"
import styled from "styled-components"

import ListToDay from "./listToDay"

export default function Today(){
    require("dayjs/locale/pt-br")
    dayjs.locale("pt-br");
    const [percent, setPercent] = useState();
    console.log(percent);
    const completed = percent == 0 ? "nenhum hábito concluido ainda" : `${Math.round(percent * 100)}% dos hábitos concluídos`
    const css = percent == 0 ? "percent" : "percent green"
    return(
        <ContainerToday>
            <Top/>
            <div className="head">
                <p className="date">{dayjs().locale('pt-br').format('dddd, DD/MM')}</p>
                <p className={css}>{completed}</p>
            </div>
            <ListToDay percent={percent} setPercent={setPercent}/>
            <Footer percent={percent}/>
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

    .green{
        color: #8FC549;
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
        justify-content: space-between;
        margin-left: 15px;
        color: #666666;
        height: 69px;
        margin-top: 13px;
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

    .done{
        background: #8FC549;
    }

    .null{
        margin-top: 188px;
        text-align: center;
    }
`