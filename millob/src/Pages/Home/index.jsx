import React from "react";
import Button from "../../Components/Button";
import MainList from "../../Components/MainList";
import * as Styled from './styled'

const Home = () => {

  return (
    <div>
      <Button />
      <Styled.Container>
     <MainList />
     </Styled.Container>
    </div>
  );
};

export default Home;
