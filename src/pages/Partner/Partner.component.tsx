import React from 'react';
import Card from './components/Card.component';
import Search from './components/search/Search.component';
import { Container, ContentHeader, Header, Button } from './Partner.styles';
import { AiOutlineUser } from 'react-icons/ai';
import Layout from '../Layout';

const Owner = () => {

    const data = [
        { nome: 'João', id: 1, status: 'Ativo' },
        { nome: 'Maria', id: 2, status: 'Inativo' },
        { nome: 'Pedro', id: 3, status: 'Ativo' },
        { nome: 'Ana', id: 4, status: 'Inativo' },
    ];


    return (
        <Layout user="Rafaela Medina">
            <Container>
                <Header>
                    <ContentHeader>
                        <AiOutlineUser />
                        <h2>Empresas</h2>
                    </ContentHeader>
                    <Search />
                </Header>
                <Button>Nova empresa</Button>
                <Card />
            </Container>
        </Layout>
    )
}

export default Owner;