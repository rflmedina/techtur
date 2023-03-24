import React from 'react';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 50%;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  background-color: gray;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Id = styled.p`
  font-size: 16px;
  margin: 0;
`;

const Status = styled.p`
  font-size: 16px;
  margin: 0;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007aff;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  margin-left: auto;
`;

const Card = ({ avatar, name, id, status }: any) => {
    const navigate = useNavigate();

  return (
    <CardContainer>
      <Avatar>
            <AiOutlineUser />
        </Avatar>
      <InfoContainer>
        <Name>{name}</Name>
        <Id>ID: {id}</Id>
        <Status>Status: {status}</Status>
      </InfoContainer>
      <Button type='button' onClick={() => navigate('owner/123')}>Editar</Button>
    </CardContainer>
  );
};

export default Card;
