import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 50%;
`;

export const Avatar = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  background-color: #D9D9D9;
  align-items: center;
  justify-content: center;

  svg {
    height: 50px;
    width: 50px;
    color: gray;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 16px;
`;

export const Name = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 0%;
`;

export const Id = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  color: black;
  justify-content: center;
  word-wrap: break-word;
  height: 30px;
  border-radius: 120px;
  font-size: 16px;
  margin: 0;

  span {
    color: #00FF19;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007aff;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  margin-left: auto;
  cursor: pointer;
`;