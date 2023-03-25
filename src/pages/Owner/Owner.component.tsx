import React from 'react';
import Card from './components/Card.component';
import Search from './components/search/Search.component';
import { Container, ContentHeader, Header, Button } from './Owner.styles';
import { AiOutlineUser } from 'react-icons/ai';

const Owner = () => {

    const data = [
        { nome: 'João', id: 1, status: 'Ativo' },
        { nome: 'Maria', id: 2, status: 'Inativo' },
        { nome: 'Pedro', id: 3, status: 'Ativo' },
        { nome: 'Ana', id: 4, status: 'Inativo' },
    ];


    return (
        <Container>
            <Header>
                <ContentHeader>
                    <AiOutlineUser />
                    <h2>Funcionários</h2>
                </ContentHeader>
                <Search />
            </Header>
            <Button>Novo Funcionário</Button>
            <Card />
        </Container>
    )
}

export default Owner;