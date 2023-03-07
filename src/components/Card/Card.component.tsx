import react from "react";
import Card from "./Card.style";

interface CardComponentInterface {
  sizeX?: string;
  sizeY?: string;
  children?: JSX.Element | JSX.Element[];
}

const CardComponent = ({ children, ...rest }: CardComponentInterface) => {
  return <Card {...rest}>{children}</Card>;
};

export default CardComponent;
