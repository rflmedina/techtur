import React from 'react';
import Card from '../../components/Card';
import Layout from '../../pages/Layout';
import { Container, TitleWrapper } from './Home.styles';
import { BsFillCartFill, BsTicketPerforatedFill } from 'react-icons/bs';

const Home = ({ user }: any) => {
  const userName = 'teste'

  return (
    <Layout user={userName}>
     <Container>
     <TitleWrapper>
        <BsTicketPerforatedFill size={30} />
        <h2>Comprar passagens</h2>
      </TitleWrapper>
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

      <TitleWrapper>
        <BsFillCartFill size={30} />
        <h2>Histórico de compras</h2>
      </TitleWrapper>
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
