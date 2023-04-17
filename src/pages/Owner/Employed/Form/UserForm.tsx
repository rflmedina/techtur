import React from "react";
import styled from "styled-components";
import { Row, Col } from 'react-grid-system'
import { InputWrapper } from "../Employed.styles";
import { Button, Container, Input, Label } from "./UserForm.styles";

const UserForm = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <InputWrapper>
            <Label>Nome:</Label>
            <Input value="Rafael Moura" type="text" />
          </InputWrapper>
        </Col>
        <Col md={6}>
          <InputWrapper>
            <Label>Local de Origem:</Label>
            <Input type="text" value="Santa Rosa"/>
          </InputWrapper>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <InputWrapper>
            <Label>CPF:</Label>
            <Input type="text" value="423.284.670-08"/>
          </InputWrapper>
        </Col>

        <Col md={6}>
          <InputWrapper>
            <Label>Local de Destino:</Label>
            <Input type="text" value="Santo Cristo"/>
          </InputWrapper>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <InputWrapper>
            <Label>Contato:</Label>
            <Input type="text" value="rafaelmoura@nuvora.com"/>
          </InputWrapper>
        </Col>
        <Col md={6}>
          <InputWrapper>
            <Label>Ônibus:</Label>
            <Input type="text" value="Quantum"/>
          </InputWrapper>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <InputWrapper>
            <Label>Login:</Label>
            <Input type="text" value="rafaelmoura@nuvora.com" />
          </InputWrapper>
        </Col>

        <Col md={6}>
          <InputWrapper>
            <Label>Senha:</Label>
            <Input type="password" value="*********"/>
          </InputWrapper>
        </Col>
      </Row>

      <Button>Salvar alterações</Button>
    </Container>
  );
};

export default UserForm;
