import React from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Circles } from "react-loader-spinner";

export default function Loader() {
    return (
        <div>
            <Circles
                align="right"
                heigth="30"
                width="30"
                color='white'
                ariaLabel='loading'
            />
            <h1>eu sou o load</h1>
        </div>
    )
}