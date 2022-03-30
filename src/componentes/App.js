import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Habits from "./Habits";
import Login from "./Login"
import Register from "./Register"
import Testes from "./Testes";
import GlobalStyle from "./layout/GlobalStyle";

export default function App(){
    return(
        <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<Login/>} > </Route>
            <Route path="/cadastro" element={<Register/>} > </Route>
            <Route path="/habitos" element={<Habits/>} > </Route>
            <Route path="/testes" element={<Testes/>} > </Route>
        </Routes>
        </BrowserRouter>        
    )
}