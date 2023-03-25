import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from 'react-grid-system'
import { InputWrapper } from "../Employed.styles";
import Card from "./components/Card";

const UserFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
`;

const UserForm = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <InputWrapper>
            <Label>Nome:</Label>
            <Input type="text" />
          </InputWrapper>
        </Col>
        <Col md={6}>
          <InputWrapper>
            <Label>Local de Origem:</Label>
            <Input type="text" />
          </InputWrapper>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <InputWrapper>
            <Label>CPF:</Label>
            <Input type="text" />
          </InputWrapper>
        </Col>

        <Col md={6}>
          <InputWrapper>
            <Label>Local de Destino:</Label>
            <Input type="text" />
          </InputWrapper>
        </Col>
      </Row>

      <Row>
        <Col>
          <InputWrapper>
            <Label>Contato:</Label>
            <Input type="text" />
          </InputWrapper>
        </Col>
        <Col>
          <InputWrapper>
            <Label>Ônibus:</Label>
            <Input type="text" />
          </InputWrapper>
        </Col>
      </Row>

      <Row>
        <Col>
          <InputWrapper>
            <Label>Login:</Label>
            <Input type="text" />
          </InputWrapper>
        </Col>

        <Col>
          <InputWrapper>
            <Label>Senha:</Label>
            <Input type="password" />
          </InputWrapper>
        </Col>
      </Row>

      <div>
        <button>Cancelar</button>
        <button>Salvar</button>
      </div>

      <div>
        <Card />
      </div>
    </div>
  );
};

export default UserForm;
