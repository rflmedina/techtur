import { AiOutlineUser } from "react-icons/ai";
import { ContentHeader, Header } from "../Owner.styles";
import { Container } from "./Employed.styles";
import UserForm from "./Form/UserForm";
import { Avatar } from "../components/Card.styles"

const Employed = () => {
    return (
        <Container>
            <Header>
                <ContentHeader>
                    <AiOutlineUser />
                    <h2>Rafael Eduardo de Moura</h2>
                </ContentHeader>
            </Header>
            <Avatar>
                <AiOutlineUser />
            </Avatar>
            <UserForm />
        </Container>
    );
}

export default Employed;