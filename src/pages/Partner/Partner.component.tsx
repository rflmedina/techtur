import React from 'react';
import Card from './components/Card.component';
import Search from './components/search/Search.component';
import { Container, ContentHeader, Header, Button } from './Partner.styles';
import { AiOutlineUser } from 'react-icons/ai';
import Layout from '../Layout';

const Partner = () => {
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
                <Card />
            </Container>
        </Layout>
    )
}

export default Partner;