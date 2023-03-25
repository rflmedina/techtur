import Card from "../../components/Card";
import Ticket from "../../components/Ticket/Ticket.component"
import Layout from "../Layout";
import { Container } from "./Ticket.styles";

const TicketDetail = () => {
    console.log("TicketDetail");
    const user = ''

    return (
        <Layout user={user}>
            <Container>
                <div>
                    <h2>Passagem</h2>
                </div>

                <Ticket
                    origin="São Paulo"
                    destination="Rio de Janeiro"
                    date="01/01/2021"
                    time="10:00"
                    qrCode="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                    barcode="1234124124124124"
                />
            </Container>
        </Layout>
    )
}

export default TicketDetail