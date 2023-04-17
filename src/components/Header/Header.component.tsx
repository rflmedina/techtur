import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #23B5D3;
  padding: 1rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-left: 20px;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DropdownMenu = styled.div<{ open: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  display: ${({ open }) => (open ? "block" : "none")};
`;

const DropdownMenuItem = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  width: 100%;
  text-align: left;
`;

const Header = ({ name }: any) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    navigate("/")
  };

  return (
    <HeaderContainer>
      <Logo>Nuvora</Logo>
      <DropdownContainer>
        <DropdownButton onClick={handleDropdownToggle}>
          {name}{"Rafaela Medina"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16px"
            height="16px"
            fill="white"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </DropdownButton>
        {/* @ts-ignore */}
        <DropdownMenu open={dropdownOpen}>
          <DropdownMenuItem onClick={handleLogout}>Sair</DropdownMenuItem>
        </DropdownMenu>
      </DropdownContainer>
    </HeaderContainer>
  );
};

export default Header;
