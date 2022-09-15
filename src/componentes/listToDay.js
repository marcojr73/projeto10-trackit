import { useEffect, useState } from "react"

import check from "../assets/images/check.png"
import axios from "axios"

export default function ListToDay({setPercent}) {

    const token = JSON.parse(localStorage.getItem("user"))

    const [habits, setHabits] = useState([])
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
    const config = {
        headers: {
            authorization: `Bearer ${token.token}`
        }
    }
    
    useEffect(() => {
        const promisse = axios.get(url, config);
        promisse.then(response => {
        setHabits(response.data)
        })
        promisse.catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (habits.length > 0) calculator()
    }, [habits])
    
    function toggle(id, status){
        const urlCheck = 
        status ? `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        : `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;

        const promisse = axios.post(urlCheck, null, config)
        promisse.then(response => {
            setHabits([...habits])
            const promisse = axios.get(url, config);
            promisse.then(response => {
            setHabits(response.data)
            })
            promisse.catch(err => console.log(err))
        })
        promisse.catch (err => alert("deu ruim"))
    }

    function calculator(){
        const hits = []
        habits.forEach(habit => {
            habit.done === true ? hits.push(1) : <></>
        })
        setPercent((hits.length/habits.length))
    }

    if (habits.length > 0) {
        return (
            <>
                {
                    habits.map((habit, index) => {
                        const css = habit.done ? "check done" : "check"
                        const color = habit.currentSequence === habit.highestSequence && habit.done === true ? "green" : ""
                        return (
                            <div key={index} className="habit">
                                <div className="txt">
                                    <p className="title">{habit.name}</p>
                                    <div className="ranking">
                                        <p className="sequence">Sequencia atual: 
                                        <span className={color}> {habit.currentSequence} dias</span>
                                        </p>

                                        <p className="rank">Seu recorde: 
                                        <span className={color}> {habit.highestSequence} dias</span>
                                        </p>
                                    </div>

                                </div>
                                <div onClick={()=>toggle(habit.id,habit.done)} className={css}> 
                                    <img src={check} alt="done" /> 
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    } else {
        return (
            <p className="null">Você não tem hábitos para hoje</p>
        )
    }

}