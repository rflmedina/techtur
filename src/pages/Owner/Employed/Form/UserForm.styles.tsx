import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
`;

export const Label = styled.label`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    padding: 0 8px;
    font-size: 16px;
    margin-bottom: 16px;
    background-color: #F2F2F2;
`;

export const Button = styled.button`
    width: 180px;
    height: 50px;
    margin-top: 20px;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    padding: 0 8px;
    font-size: 16px;
    margin-bottom: 16px;
    background: #252422;
    border-radius: 15px;
    color: #fff;
    cursor: pointer;
`;  