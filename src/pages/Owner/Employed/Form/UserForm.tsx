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
        <Col md={6}>
          <InputWrapper>
            <Label>Contato:</Label>
            <Input type="text" />
          </InputWrapper>
        </Col>
        <Col md={6}>
          <InputWrapper>
            <Label>Ônibus:</Label>
            <Input type="text" />
          </InputWrapper>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <InputWrapper>
            <Label>Login:</Label>
            <Input type="text" />
          </InputWrapper>
        </Col>

        <Col md={6}>
          <InputWrapper>
            <Label>Senha:</Label>
            <Input type="password" />
          </InputWrapper>
        </Col>
      </Row>

      <Button>Salvar alterações</Button>
    </Container>
  );
};

export default UserForm;
