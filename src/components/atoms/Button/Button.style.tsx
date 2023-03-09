import styled, { css } from "styled-components";

export const defaultConfig = styled.button`
  background-color: #24b0ff;
  color: white;
  border: none;
  height: ${"40px"};
  width: ${"40px"};
  font-size: 20px;

  :active {
    transition: 100ms;
    transform: scale(0.9);
  }
`;

export const defaultButton = styled(defaultConfig)``;

export const MainSquareButton = styled(defaultConfig)``;

export const MainCircleButton = styled(defaultConfig)`
  min-height: auto;
  border-radius: ${"50%"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SecondarySquareButton = styled(defaultConfig)``;

export const SecondaryCircleButton = styled(defaultConfig)``;
