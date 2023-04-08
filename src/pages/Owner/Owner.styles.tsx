import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    button {
        display: flex;
        align-self: center;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 50px 0px 0px;
    width: 50%;
    height: 100%;
`

export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        margin-left: 10px;
    }

    svg {
        height: 50px;
        width: 50px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0px 0px 20px 0px;
        width: 100%;
        text-align: center;
    }
`

export const Button = styled.button`
    padding: 8px 16px;
    background-color: black;
    color: #ffffff;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    margin-left: auto;
    cursor: pointer;
`