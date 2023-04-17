import { useState } from "react";
import { Button, Container, Form, Icon, Input, InputContainer, Label, Title } from "./Login.styles";
import Woman from '../../assets/images/woman.png'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    // handle login logic
  };

  return (
    <Container>
      <h2>nuvora</h2>
      <p>a tecnologia <br /> é o que nos <br /> move.</p>

      <img src={Woman} alt="mulher segurando celular"/>

      <Form onSubmit={handleLogin}>
        <Label>Email</Label>
        <InputContainer>
        <Input type="text" placeholder="nuvora@email.com" value={username} onChange={handleUsernameChange} />
        <Icon><FaUser /></Icon>
        </InputContainer>

        <Label>Senha</Label>
        <InputContainer>
          <Input type="password" placeholder="*******" value={password} onChange={handlePasswordChange} />
          <Icon><FaLock /></Icon>
        </InputContainer>

        <Button type="submit" onClick={() => navigate('/home')}>Entrar</Button>

      </Form>
    </Container>
  );
};

export default Login;