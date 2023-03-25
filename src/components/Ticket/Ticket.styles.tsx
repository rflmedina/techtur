import styled from "styled-components";

export const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

  hr {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const QRCodeContainer = styled.div`
  margin-top: 16px;
`;

export const QRCode = styled.img`
  width: 200px;
  height: 200px;
`;

export const BarcodeContainer = styled.div`
  margin-top: 16px;
`;


export const DataWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    span {
        font-size: 16px;
        padding: 10px;
        font-weight: bold;
        color: #00B4D9;
    }

    P {
        font-size: 12px;
        margin: 0;
    }
`;

export const Value = styled.span`
  font-size: 14px;
  margin-right: 10px;
`;

export const Arrow = styled.span`
  font-size: 20px;
  margin: 0 10px;
`;

export const TicketInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;

  svg {
    margin-right: 8px;
    font-size: 24px;
  }
`;

export const AlertMessage = styled.div`
  display: flex;
  align-items: center;
  color: #f9e94f;
  font-size: 16px;
  margin-top: 16px;

  svg {
    margin-right: 8px;
    font-size: 24px;
  }
`;


export const TicketPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px;

  svg {
    margin-right: 8px;
    font-size: 24px;
  }
`;

export const BlueTag = styled.div`
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
  background-color: #00B4D9;
`;
