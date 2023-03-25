import React from 'react';
import Card from '../../components/Card';
import Layout from '../../pages/Layout';
import { Container } from './Home.styles';

const Home = ({ user }: any) => {
  const userName = 'teste'

  return (
    <Layout user={userName}>
     <Container>
     <div>
        <h2>Comprar passagens</h2>
      </div>
      <Card
        timeOrigin="10:00"
        timeDestiny="12:00"
        originCity="Santa Rosa"
        destinationCity="Santo Cristo"
        companyName="Viação 1001"
        price="7,00"
      />
      <Card
        timeOrigin="10:00"
        timeDestiny="12:00"
        originCity="Santa Rosa"
        destinationCity="Santo Cristo"
        companyName="Viação 1001"
        price="7,00"
      />
      <Card
        timeOrigin="10:00"
        timeDestiny="12:00"
        originCity="Santa Rosa"
        destinationCity="Santo Cristo"
        companyName="Viação 1001"
        price="7,00"
      />

      <div>
        <h2>Histórico de compras</h2>
      </div>
      <Card
        timeOrigin="10:00"
        timeDestiny="12:00"
        originCity="Santa Rosa"
        destinationCity="Santo Cristo"
        companyName="Viação 1001"
        price="7,00"
      />
     </Container>
    </Layout>
  );
};

export default Home;
