import React from "react";
import { StyledComponentPropsWithRef } from "styled-components";
import { ButtonEnum } from "../../../models/enums/Button";

import {
  MainSquareButton,
  MainCircleButton,
  SecondarySquareButton,
  SecondaryCircleButton,
  defaultButton,
} from "./Button.style";

interface ButtonInterface
  extends StyledComponentPropsWithRef<typeof defaultButton> {
  enumType?: ButtonEnum;
}

const ButtonComponent = ({ children, enumType, ...rest }: ButtonInterface) => {
  switch (enumType) {
    case ButtonEnum.MainSquareButton:
      return <MainSquareButton {...rest}>{children}</MainSquareButton>;
    case ButtonEnum.MainCircleButton:
      return <MainCircleButton {...rest}>{children}</MainCircleButton>;
    default:
      return <MainSquareButton {...rest}>{children}</MainSquareButton>;
  }
};

export default ButtonComponent;
