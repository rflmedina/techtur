import React from 'react';
import Card from './components/Card.component';
import Search from './components/search/Search.component';
import { Container, Header } from './Owner.styles';
import { AiOutlineUser } from 'react-icons/ai';

const Owner = () => {
    return (
        <Container>
           <Header>
            <div style={{display: 'flex'}}>
            <AiOutlineUser />
            <h2>Funcionários</h2>
            </div>
            <Search />
           </Header>
            <Card />
        </Container>
    )
}

export default Owner;