import React from "react";
import styled from "styled-components";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Bars } from "react-loader-spinner";

export default function Loader() {
    return (
        <Container>
            <Bars
                align="center"
                heigth="30"
                width="30"
                color='white'
                ariaLabel='loading'
            />
        </Container>
    )
}

const Container = styled.div`
    /* background: red; */
`