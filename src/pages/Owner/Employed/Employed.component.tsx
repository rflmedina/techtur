import { AiOutlineUser } from "react-icons/ai";
import { ContentHeader, Header } from "../Owner.styles";
import { Container, FormContainer, Avatar } from "./Employed.styles";
import UserForm from "./Form/UserForm";
import Layout from "../../Layout";
import Card from "../../../components/Card";

const Employed = () => {
    return (
        <Layout user="Rafaela Medina">
            <Container>
                <Header>
                    <ContentHeader>
                        <AiOutlineUser />
                        <h2>Rafael Moura</h2>
                    </ContentHeader>
                </Header>

                <FormContainer>
                    <Avatar>
                        <AiOutlineUser />
                    </Avatar>
                    <UserForm />
                </FormContainer>

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
                    buttonText="Comprovante"
                />
            </Container>
        </Layout>
    );
}

export default Employed;