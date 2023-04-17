import React from 'react';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { CardContainer, Avatar, InfoContainer, Status, Name, Id, Button } from './Card.styles'

const Card = ({ avatar, name, id, status }: any) => {
  const navigate = useNavigate();

  return (
    <>
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
      <Button type='button' onClick={() => navigate('owner/123')}>Editar</Button>
    </CardContainer >

    <CardContainer style={{marginTop: 20}}>
    <Avatar>
      <AiOutlineUser />
    </Avatar>
    <InfoContainer>
      <div>
        <Name>Mirella Luana da Mota</Name>
        <Id>ID: 564528</Id>
      </div>
      <Status>
        <p>Pagamento
          <br />
          <span>em andamento</span>
        </p>
      </Status>
    </InfoContainer>
    <Button type='button' onClick={() => navigate('owner/123')}>Editar</Button>
    </CardContainer >
    </>
  );
};

export default Card;
