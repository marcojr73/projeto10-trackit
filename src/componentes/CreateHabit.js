import axios from "axios";
import { useEffect } from "react";
import { matchRoutes } from "react-router";
import { useState } from "react/cjs/react.development";
import styled from "styled-components"
import Loader from "./layout/loader";

export default function CreateHabit({habits, setHabits, token}){
    const [daysSelected, setDaysSelected] = useState(new Map())
    const [nameHabit, setNameHabit] = useState("")
    const [load, setLoad] = useState("Salvar");
    const week = ["D","S","T","Q","Q","S","S"];

    function filterDays(index, day){
        const selected = daysSelected.has(index);
        if(selected){
            daysSelected.delete(index);
            setDaysSelected(new Map(daysSelected))
        } else {
            setDaysSelected(new Map(daysSelected.set(index, day)))
        }
    }

    function generate(){
        setLoad(<Loader/>)

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        const objHabit = {
            name: nameHabit,
            days: [...daysSelected.keys()]
        }

        const promisse = axios.post(url, objHabit, config);
        promisse.then(response => {
            const {data} = response;
            setLoad("Salvar")
            setNameHabit("")
            setDaysSelected(new Map())
            // console.log(data);
        })
        promisse.catch(err => {
            alert("deu ruim")
            setLoad("Salvar")
        })
    }
    
    if(habits===true){
            return(
                <Container>
                    <input value={nameHabit} onChange={(e) => setNameHabit(e.target.value)} className="nameTxt" type="text" placeholder="nome do hábito"></input>
                    <div className="days">
                        {
                            week.map((day, index) => {
                                const selected = daysSelected.has(index);
                                const css = selected ? `day selected` : "day"
                                return(
                                    <div onClick={()=>filterDays(index, day)} className={css}> {day} </div>
                                )
                            })
                        }
                    </div>
                    <button onClick={()=>setHabits(!habits)} className="quit">Cancelar</button>
                    <button onClick={()=>generate()} className="save">{load}</button>
                </Container>
                )
    }else{
        return(
            <></>
        )
    }
}

const Container = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    margin: auto;
    position: relative;
    border-radius: 5px;
    margin-bottom: 10px;

    .days{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-gap: 8px;  
        position: absolute;
        top: 73px;
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
    
    .nameTxt{
        width: 303px;
        height: 45px;
        position: absolute;
        top: 18px;
        left: 18px;
        padding-left: 10px;
        font-size: 20px;
        border: 1px solid #D5D5D5;
        color: #666666;
    }

    .nameTxt::placeholder{
        color: #DBDBDB;
    }

    button{
        width: 84px;
        height: 35px;
        position: absolute;
        bottom: 15px;
    }

    .quit{
        background: #FFFFFF;
        border: none;
        color: #52B6FF;
        right: 120px;
    }

    .save{
        display: flex;
        justify-content:center;
        align-items: center;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        color: #FFFFFF;
        right: 15px;
    }

`