import axios from "axios"
import { useEffect } from "react"
import check from "../assets/images/check.png"
import { useContext } from "react"
import DataContext from "./context/context"

export default function ListToDay() {

    const {token} = useContext(DataContext) 
    
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
    const config = {
        headers: {
            authorization: `Bearer ${token.token}`
        }
    }
    useEffect(() => {
    const promisse = axios.get(url,config);
    promisse.then(response => {
        const {data} = response;
        console.log(data);
    })
    promisse.catch(err => console.log(err))
    },[])
    
    return (
        <div className="habit">
            <div className="txt">
                <p className="title">titulo</p>
                <p className="sequence">sequence</p>
                <p className="rank">recorde</p>
            </div>
            <div className="check"> <img src={check} /> </div>
        </div>
    )
}