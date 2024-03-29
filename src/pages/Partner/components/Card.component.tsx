import React from 'react';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { CardContainer, Avatar, InfoContainer, Status, Name, Id, Button } from './Card.styles'

const Card = ({ avatar, name, id, status }: any) => {
  const navigate = useNavigate();

  return (
    <CardContainer>
      <Avatar>
        <AiOutlineUser />
      </Avatar>
      <InfoContainer>
        <div>
          <Name>Rafael Eduardo de Moura</Name>
          <Id>ID: 324728</Id>
        </div>
        <Status>
          <p>Pagamento
            <br />
            <span>em andamento</span>
          </p>
        </Status>
      </InfoContainer>
      <Button type='button' onClick={() => navigate('/123')}>Editar</Button>
    </CardContainer >
  );
};

export default Card;
