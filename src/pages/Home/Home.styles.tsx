import styled from "styled-components";

export const BodyContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background: #F5F5F5;
`

export const DivTextBuy = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #181818;
    height: 5rem;
    margin-top: 10rem;
    margin-left: 10rem;

    h1{
        margin-left: 1rem;
        align-self: center;
        font-size: 26px;
    }
    
`

export const Card = styled.div`
    background: #fff;
    display: flex;
    position: fixed;
    margin-left: 10rem;
    align-items: center;
    top: 17rem;
    width: 70rem;
    height: 10rem;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


`

export const CardText = styled.div`
    padding: 2rem;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: row;
    }
`

export const Button = styled.div`
    display: flex;
    width: 8rem;
    height: 2.5rem;
    color: #ffff;
    font-size: 17px;
    font-weight: bold;
    align-items: center;
    justify-content: center;

    background: #181818;
    border-radius: 10px;
`

