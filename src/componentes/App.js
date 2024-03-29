import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/context";

import Habits from "./Habits";
import Login from "./Login"
import Register from "./Register"
import GlobalStyle from "./layout/GlobalStyle";
import Historic from "./Historic";
import Today from "./Hoje";

export default function App(){
    return(
        <DataProvider>
            <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login/>} > </Route>
                <Route path="/cadastro" element={<Register/>} > </Route>
                <Route path="/habitos" element={<Habits/>} > </Route>
                <Route path="/hoje" element={<Today/>} > </Route>
                <Route path="/historico" element={<Historic/>} > </Route>
            </Routes>
            </BrowserRouter>        
        </DataProvider>
    )
}