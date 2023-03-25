import React from "react";
import { Container } from "./Button.styles";
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'

const ButtonSMore = () => {
    return (
        <Container>
          <div>
            <p>Ver mais</p>
            <MdOutlineKeyboardDoubleArrowDown size={30}></MdOutlineKeyboardDoubleArrowDown>
          </div>
        </Container>
    );
}

export default ButtonSMore;