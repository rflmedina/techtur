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
    color: #000;
    

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: left;
        flex-direction: row;
        margin-left: 5px;
    }

    p{
        margin: 0;
        width: max-content;
    }


`

export const Button = styled.div`
    display: block;
    position: fixed;
    flex-direction: row;
    margin: 0px;
    background: #000;
    color: #fff;
    border-radius: 10px;
    width: 7rem;
    margin-right: 20px;
    
    p{
    align-items: center;
    justify-content: center;
    text-align: left;
    font-weight: bold;
    }
`

export const CardTextHours = styled.div`
    margin-left: 15px;
    font-size: 20px;
    font-weight: bold;
`

export const CardTextCity = styled.div`
    margin-left: 15px;
    font-size: 20px;
    font-weight: bold;
`

export const CardTextBussName = styled.div`
    font-size: 15px;
    font-weight: bold;
        align-items: center;
    justify-content: center;
    text-align: center;
`

export const CardTextPrice = styled.div`
    font-size: 20px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const CardTextMessagePrice = styled.div`
    display: flex;

    div{
        display: block;
        margin-top: 25px;
    }

`


