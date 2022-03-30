import styled from "styled-components"

const Container = styled.main`
    img{
        width: 180px;
        height: 173px;
        position: absolute;
        right: 0;
        left: 0;
        top: 68px;
        margin: auto;
    }

    input, button{
        width: 303px;
        height: 45px;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        border: 1px solid #D5D5D5;
        font-size: 21px;
        font-weight: 400;
        padding-left: 11px;
        color: #666666;
    }

    input::placeholder{
        color: #DBDBDB;
    }

    input:focus{
        outline: 0;
        border: 2px solid #D5D5D5;
    }

    .e-mail{
        top: 279px;
    }

    .pass{
        top: 330px;
    }

    .name{
        top: 381px;
    }

    .pic{
        top: 432px;
        
        line-height: 45px;
    }

    .send{
        top: 483px;
        border-radius: 5px;
        background-color: #52B6FF;
        color: #FFFFFF;
    }

    .sub{
        display: flex;
        justify-content: center;
        align-items: center;
        top: 381px;
        border-radius: 5px;
        background-color: #52B6FF;
        color: #FFFFFF;
    }

    .to-register{
        color: #52B6FF;
        font-size: 14px;
        position: absolute;
        width: 252px;
        left: 0;
        right: 0;
        top: 451px;
        margin: auto;

    }
    
    .to-log{
        color: #52B6FF;
        font-size: 14px;
        position: absolute;
        width: 252px;
        left: 0;
        right: 0;
        top: 553px;
        margin: auto;

    }
`

export default Container;