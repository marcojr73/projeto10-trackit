import axios from "axios";
import { useEffect } from "react";
// import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import { useState } from "react";

export default function ListHabits({ token, setInfo }) {
    const week = ["D", "S", "T", "Q", "Q", "S", "S"];
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    let [listHabits, setListHabits] = useState([])

    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promisse = axios.get(url, config);
        promisse.then(response => {
            setListHabits([...response.data])
            // let daysSelected = listHabits[0].days;
            // console.log(daysSelected)
            // console.log(listHabits[0].days)
        })
        promisse.catch(err => alert("deu ruim meu patrão"))
    }, [])
    
    // console.log(daysSelected)
    if (listHabits.length !== 0) {
        setInfo(false)
        return (
            <div>
                {
                    listHabits.map((habit, index) => {
                        return (
                            <ListContainer >
                                <h1 className="name-habit">{habit.name}</h1>
                                <div className="week">
                                    {
                                        week.map((day, index) => {
                                            const changeColor = habit.days.find((e => e == index ))
                                            const css = changeColor !== undefined ? "day selected" : "day";
                                            return (
                                                <div className={css}>{day}</div>
                                            )
                                        })
                                    }
                                </div>
                            </ListContainer >
                        )
                    })
                }
            </div>
        )
    } else {
        return (<></>)
    }
}

const ListContainer = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    margin:auto;
    position: relative;
    border-radius: 5px;
    margin-bottom: 10px;

    .name-habit{
        width: 303px;
        height:  45px;
        position: absolute;
        top: 13px;
        left: 18px;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        color: #666666;
    }


    .week{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-gap: 8px;  
        position: absolute;
        top: 46px;
        left: 19px;
    }

    .day{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        color: #DBDBDB;
        border: 1px solid #D5D5D5;
        cursor: pointer;
    }

    .selected{
        background: #CFCFCF;
        color: #FFFFFF;
    }

`