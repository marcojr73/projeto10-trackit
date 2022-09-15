import { useEffect } from "react";

import axios from "axios";
import styled from "styled-components";

import del from "../assets/images/delete.png";

export default function ListHabits({ token, setInfo, listHabits, setListHabits, urlLoad }) {
    const week = ["D", "S", "T", "Q", "Q", "S", "S"];

    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    function deleteHabit(id) {
        if (window.confirm('Deseja realmente excluir esse hábito?')) {

            const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
            promisse.then(response => {
                const promisse = axios.get(urlLoad, config);
                promisse.then(response => {
                    setListHabits([...response.data])
                })
                promisse.catch(err => alert("Não consegui carregar os seus hábitos"))
            })
            promisse.catch(err => {
                alert("Ocorreu um erro")
            })
        }
    }

    useEffect(() => {
        const promisse = axios.get(urlLoad, config);
        promisse.then(response => {
            setListHabits([...response.data])
        })
        promisse.catch(err => alert("Não foi possível carregar os seus hábitos"))
    }, [config, setListHabits, urlLoad])

    useEffect(() => {
        setInfo(false)
    }, [listHabits])

    if (listHabits.length !== 0) {
        return (
            <ul>
                {listHabits.map(habit => {
                    return (
                        <ListContainer >
                            <li key={habit.id}>
                                <h1 className="name-habit">{habit.name}</h1>
                                <img onClick={() => deleteHabit(habit.id)} className="del" src={del} alt="delete" />
                                <div className="week">
                                    {
                                        week.map((day, index) => {
                                            const changeColor = habit.days.find((e => e === index))
                                            const css = changeColor !== undefined ? "day selected" : "day";
                                            return (
                                                <div className={css}>{day}</div>
                                            )
                                        })
                                    }
                                </div>
                            </li>
                        </ListContainer >
                    )
                })}
            </ul>
        )
    } else {
        return (<></>)
    }
}

const ListContainer = styled.div`
    li{
        width: 340px;
        height: 91px;
        background: #FFFFFF;
        margin:auto;
        position: relative;
        border-radius: 5px;
        margin-bottom: 10px;
    }

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

    .del{
        position: absolute;
        top: 12px;
        right: 12px;
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