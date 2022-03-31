import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Habits from "./Habits";
import Login from "./Login"
import Register from "./Register"
import GlobalStyle from "./layout/GlobalStyle";
import Hoje from "./Hoje";
import Historic from "./Historic";

export default function App(){
    return(
        <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<Login/>} > </Route>
            <Route path="/cadastro" element={<Register/>} > </Route>
            <Route path="/habitos" element={<Habits/>} > </Route>
            <Route path="/hoje" element={<Hoje/>} > </Route>
            <Route path="/historico" element={<Historic/>} > </Route>
        </Routes>
        </BrowserRouter>        
    )
}