import React from "react";
import styled from "styled-components";

const UserFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 400px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
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
    <UserFormContainer>
      <FormRow>
        <FormGroup>
          <Label>Nome:</Label>
          <Input type="text" />
        </FormGroup>

        <FormGroup>
          <Label>Local de Origem:</Label>
          <Input type="text" />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <Label>CPF:</Label>
          <Input type="text" />
        </FormGroup>

        <FormGroup>
          <Label>Local de Destino:</Label>
          <Input type="text" />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <Label>Contato:</Label>
          <Input type="text" />
        </FormGroup>

        <FormGroup>
          <Label>Ônibus:</Label>
          <Input type="text" />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <Label>Login:</Label>
          <Input type="text" />
        </FormGroup>

        <FormGroup>
          <Label>Senha:</Label>
          <Input type="password" />
        </FormGroup>
      </FormRow>
    </UserFormContainer>
  );
};

export default UserForm;
