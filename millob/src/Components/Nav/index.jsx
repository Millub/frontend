import React from "react";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'
const Nav = () => {
  let navigate = useNavigate();

  return (
    <Styled.Navbar>
      <Styled.NavLogo onClick={() => navigate("/")}>
        밀럽
      </Styled.NavLogo>

      <Styled.NavMenu>
        <Styled.NavLinks onClick={() => navigate("/search")}>
            <FaSearch />
        </Styled.NavLinks>
      </Styled.NavMenu>
    </Styled.Navbar>
  );
};

export default Nav;
