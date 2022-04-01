import axios from "axios"
import { useEffect, useState } from "react"
import check from "../assets/images/check.png"
import { useContext } from "react"
import DataContext from "./context/context"

export default function ListToDay() {

    const { token } = useContext(DataContext)
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
            console.log(habits);
        })
        promisse.catch(err => console.log(err))
    }, [])
    console.log(habits);
    if (habits.length > 0) {
        return (
            <div>
                {
                    habits.map((habit, index) => {
                        const css = habit.done ? "check done" : "check"
                        return (
                            <div className="habit">
                                <div className="txt">
                                    <p className="title">{habit.name}</p>
                                    <p className="sequence">Sequencia atual: {habit.currentSequence} dias</p>
                                    <p className="rank">Seu recorde: {habit.highestSequence} dias</p>
                                </div>
                                <div className={css}> <img src={check} /> </div>
                            </div>
                        )
                    })
                }
            </div>
            // <div className="habit">
            //     <div className="txt">
            //         <p className="title">titulo</p>
            //         <p className="sequence">sequence</p>
            //         <p className="rank">recorde</p>
            //     </div>
            //     <div className="check"> <img src={check} /> </div>
            // </div>
        )
    } else {
        return (
            <p>Você não tem hábitos para hoje</p>
        )
    }

}