import Header from "../../components/Header/Header.component";
// import Card from "../../components/Card/Card.component";

import { BodyContainer, DivTextBuy, Card, CardText, Button, CardTextHours, CardTextCity, CardTextBussName, CardTextPrice, CardTextMessagePrice } from "./Home.styles";
import { BsTicketPerforatedFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdBusAlert, MdDirectionsBusFilled } from 'react-icons/md';


import { Col, Row } from "react-grid-system";


const Home = () => (
    <>
        <Header></Header>

        <BodyContainer>

            <DivTextBuy>
                <BsTicketPerforatedFill size={40} /><h1>Comprar passagens</h1>
            </DivTextBuy>

            <Card>
                <Row>
                    <Col>
                        <CardText>
                            <CardTextHours>
                                <p>14:00</p>
                            </CardTextHours>
                            <div><FaMapMarkerAlt size={20} /><p style={{ marginLeft: 5 }}>ORIGEM</p></div>
                            <CardTextCity>
                                <p>Santo Cristo, RS</p>
                            </CardTextCity>
                        </CardText>
                    </Col>
                    <Col>
                        <CardText>
                            <br />
                            <div><MdBusAlert size={30} /></div>
                            <br />
                        </CardText>
                    </Col>
                    <Col>
                        <CardText>
                            <CardTextHours>
                                <p>14:40</p>
                            </CardTextHours>
                            <div><FaMapMarkerAlt size={20} /><p style={{ marginLeft: 5 }}>DESTINO</p></div>
                            <CardTextCity>
                                <p>Santa Rosa, RS</p>
                            </CardTextCity>
                        </CardText>
                    </Col>
                    <Col>
                        <CardText>
                            <br />
                            <CardTextBussName>
                                <div><MdDirectionsBusFilled size={30} /><p>UNIGAL</p></div>
                            </CardTextBussName>
                            <br />
                        </CardText>
                    </Col>
                    <Col>
                        <CardText>
                            <br />
                            <CardTextMessagePrice>
                                <p>Valor da passagem</p>
                            </CardTextMessagePrice>
                            <CardTextPrice>
                                <p>R$7,50</p>
                            </CardTextPrice>
                        </CardText>
                    </Col>
                    <Col>
                        <br />
                        
                        <Button><p>Comprar</p></Button>
                        
                    </Col>
                </Row>
            </Card>

        </BodyContainer>
    </>
)

export default Home;