import { useState } from "react";
import { Button, Container, Form, Input, Label, Title } from "./Login.styles";
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
        <p>a tecnologia <br /> é o que nos <br/> move.</p>

        <img src={Woman} />

        <Form onSubmit={handleLogin}>
          <Label>CPF ou CNPJ</Label>
          {/* <InputGroup> */}
          {/* <Icon> */}
            {/* <FaLock /> */}
          {/* </Icon> */}
          <Input type="text" placeholder="738.289.425-88" value={username} onChange={handleUsernameChange} />
          {/* </InputGroup> */}
          <Label>Senha</Label>
          {/* <InputGroup> */}
          {/* <Icon> */}
            {/* <FaLock /> */}
          {/* </Icon> */}

          <Input type="password" placeholder="*******" value={password} onChange={handlePasswordChange} />
          {/* </InputGroup> */}
          <Button type="submit" onClick={() => navigate('/home')}>Entrar</Button>
        </Form>
      </Container>
    );
  };

  export default Login;