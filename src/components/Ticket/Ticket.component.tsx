import Barcode from 'react-barcode';
import { FiAlertTriangle } from 'react-icons/fi';
import { FaBus } from 'react-icons/fa';
import { BsBuilding } from 'react-icons/bs';
import { MdEventSeat } from 'react-icons/md';

import {
  TicketContainer, DataWrapper, Value, Arrow, TicketPrice, BlueTag,
  QRCodeContainer, QRCode, BarcodeContainer, AlertMessage, TicketInfo,
} from './Ticket.styles'
import { Col, Row } from 'react-grid-system';


const Ticket = ({ originTime, originCity, destinationTime, destinationCity, date, time, qrCode }: any) => {
  return (
    <TicketContainer>
      <BlueTag />

      <div style={{ display: 'flex' }}>
        <DataWrapper>
          <Value>{originTime}</Value>
          <p>ORIGEM</p>
          <Value>{originTime}</Value>
        </DataWrapper>
        <Arrow>&rarr;</Arrow>
        <DataWrapper>
          <Value>{destinationTime}</Value>
          <p>DESTINO</p>
          <Value>{destinationCity}</Value>
        </DataWrapper>
      </div>

      <hr />

      <TicketInfo>
        <Row>
          <Col>
            <MdEventSeat size={24} />
            Poltrona: 20
          </Col>
          <Col>
            <BsBuilding size={24} />
            Plataforma: 4
          </Col>
        </Row>
        <Row>
          <Col>
            <FaBus size={24} />
            Convencional
          </Col>
        </Row>
        <p>Prefixo 0000 linha Santo Cristo (RS) x Santa Rosa(RS)</p>
      </TicketInfo>

      <hr />

      <TicketPrice>
        <Row>
          Tarifa: R$ 25,00
        </Row>
        <Row>
          Valor Total: R$ 25,00
        </Row>
        <Row>
          Desconto: R$ 0,00
        </Row>
        <Row>
          Valor a Pagar: R$ 25,00
        </Row>
        <Row>
          Vale Transporte: 123456789
        </Row>
      </TicketPrice>

      <hr />

      <QRCodeContainer>
        <QRCode src={qrCode} alt="QR Code da passagem" />
      </QRCodeContainer>
      <AlertMessage>
        <FiAlertTriangle />
        Mostre esse QR Code ao motorista ou ajudante.
      </AlertMessage>
      <BarcodeContainer>
        <Barcode value="1234567890" />
      </BarcodeContainer>
    </TicketContainer>
  );
};

export default Ticket;
