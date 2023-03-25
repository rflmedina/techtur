import Header from "../../components/Header/Header.component";
// import Card from "../../components/Card/Card.component";

import { BodyContainer, DivTextBuy, Card, CardText, Button } from "./Home.styles";
import { BsTicketPerforatedFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdBusAlert, MdDirectionsBusFilled } from 'react-icons/md';


import { Col, Row } from "react-grid-system";


const Home = () => {
    return (
        <>
        <Header></Header>

        <BodyContainer>

            <DivTextBuy>
                <BsTicketPerforatedFill size={40}/><h1>Comprar passagens</h1>
            </DivTextBuy>

            <Card>
                    <Row>
                        <Col>
                            <CardText>
                                <p>14:00</p>
                                    <div><FaMapMarkerAlt size={20}/><p>ORIGEM</p></div>
                                <p>Santo Cristo, RS</p>
                            </CardText>
                        </Col>
                        <Col>
                            <CardText>
                                <br/>
                                    <div><MdBusAlert size={20}/></div>
                                <br/>
                            </CardText>
                        </Col>
                        <Col>
                            <CardText>
                                <p>14:40</p>
                                    <div><FaMapMarkerAlt size={20}/><p>ORIGEM</p></div>
                                <p>Santa Rosa, RS</p>
                            </CardText>
                        </Col>
                        <Col>
                            <CardText>
                                <div><MdDirectionsBusFilled size={20}/><p>Unigal</p></div>
                            </CardText>
                        </Col>
                        <Col>
                            <CardText>
                                <div><p>Valor da <br/>passagem</p></div>
                                <p>R$7,50</p>
                            </CardText>
                        </Col>
                        <Col>
                            <CardText>
                                <Button><p>Comprar</p></Button>
                            </CardText>
                        </Col>

                    </Row>
            </Card>

        </BodyContainer>
        </>
    );
}

export default Home;