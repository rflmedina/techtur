import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  box-sizing: border-box;
  font-family: sans-serif;
  color: #333333;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  font-size: 18px;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;

const Card = ({ time, origin, city, brand, price }: any) => {
    return (
        <CardWrapper>
            <Row>

                <Value>{time}</Value>
            </Row>
            <Row>
                <Value>{origin}</Value>
            </Row>
            <Row>
                <Value>{city}</Value>
            </Row>
            <Row>
                <Value>{brand}</Value>
            </Row>
            <Row>
                <Value>{price}</Value>
            </Row>
            <Button>Comprovante</Button>
        </CardWrapper>
    );
};

export default Card;
