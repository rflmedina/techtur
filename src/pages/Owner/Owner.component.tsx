import React from 'react';
import Card from './components/Card.component';
import Search from './components/search/Search.component';
import { Container, ContentHeader, Header, Button } from './Owner.styles';
import { AiOutlineUser } from 'react-icons/ai';
import Layout from '../Layout';

const Owner = () => {
    return (
        <Layout user="Rafaela Medina">
            <Container>
                <Header>
                    <ContentHeader>
                        <AiOutlineUser />
                        <h2>Funcionários</h2>
                    </ContentHeader>
                    <Search />
                </Header>
                 <Card />
            </Container>
        </Layout>
    )
}

export default Owner;