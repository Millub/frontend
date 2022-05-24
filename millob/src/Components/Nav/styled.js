import styled from "styled-components";

export const Navbar = styled.nav`
  background: #ffffff;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 999;
  justify-content: space-around;
  border-bottom: 1.5px solid #e0e0e0;

  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
  }
`;

export const NavLogo = styled.h1`
  color: #000000;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
`;

export const NavLinks = styled.div`
  font-size: 2rem;
  align-items: center;
  display: flex;
  padding: 0.5rem 1rem;
  &:hover {
    cursor: pointer;
  }
  &#signup {
    color: #346cfd;
  }

  @media screen and (max-width: 480px) {
    text-align: center;
    display: table;
    &:hover {
      color: #4b89dc;
      transition: all 0.3s ease;
    }
  }
`;

export const Img = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
