import { AiOutlineUser } from "react-icons/ai";
import { ContentHeader, Header } from "../Partner.styles";
import { Container } from "./Employed.styles";
import UserForm from "./Form/UserForm";
import { Avatar } from "../components/Card.styles"
import Layout from "../../Layout";
import Card from "../../../components/Card";

const Employed = () => {
    return (
       <Layout user="Rafaela Medina">
         <Container>
            <Header>
                <ContentHeader>
                    <AiOutlineUser />
                    <h2>Empresa nome</h2>
                </ContentHeader>
            </Header>
            <Avatar>
                <AiOutlineUser />
            </Avatar>
            <UserForm />
            <div>
                <h2>Histórico de compras</h2>
            </div>
            <Card />
        </Container>
       </Layout>
    );
}

export default Employed;