import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  margin: 20px 0px;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 135px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  box-sizing: border-box;
  font-family: sans-serif;
  color: #333333;
`;

export const Value = styled.span`
  font-size: 14px;
  margin-right: 10px;
`;

export const Arrow = styled.span`
  font-size: 20px;
  margin: 0 10px;
`;

export const CompanyIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;

export const DataWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    span {
        font-size: 16px;
        padding: 10px;
        font-weight: bold;
        color: #00B4D9;
    }

    P {
        font-size: 12px;
        margin: 0;
    }
    `

export const CompanyWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    span { 
        margin-left: 5px;
    }
`

export const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    span {
        margin: 5px 0;
    }
    `