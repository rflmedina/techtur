import React from 'react';
import { FaBus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CardWrapper, DataWrapper, Value, Arrow,  CompanyWrapper, PriceWrapper, Button } from './Card.styles'


const Card = ({ timeOrigin, timeDestiny, originCity, destinationCity, companyName, price, buttonText }: any) => {
    const navigate = useNavigate();

    return (
        <CardWrapper>
            <DataWrapper>
                <Value>{timeOrigin}</Value>
                <p>ORIGEM</p>
                <Value>{originCity}</Value>
            </DataWrapper>
            <Arrow>&rarr;</Arrow>
            <DataWrapper>
                <Value>{timeDestiny}</Value>
                <p>DESTINO</p>
                <Value>{destinationCity}</Value>
            </DataWrapper>
            <CompanyWrapper>
                <FaBus color={"#00B4D9"} size={30} />
                <Value>{companyName}</Value>
            </CompanyWrapper>
            <PriceWrapper>
                <Value>Valor da passagem</Value>
                <Value>R${price}</Value>
            </PriceWrapper>
            <Button onClick={() => navigate('/ticket/83472381')}>{buttonText ? buttonText : 'Comprar'}</Button>
        </CardWrapper>
    );
};

export default Card;
