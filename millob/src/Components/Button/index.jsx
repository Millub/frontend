import React from "react";
import * as Styled from "./styled";

const Button = () => {
  return (
    <>
      <Styled.Wrapper>
        <Styled.Button>일반음식점</Styled.Button>
        <Styled.Button>휴게음식점</Styled.Button>
        <Styled.Button>제과점</Styled.Button>
        <Styled.Button>소매업</Styled.Button>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.Button>서비스업</Styled.Button>
        <Styled.Button>숙박업소</Styled.Button>
        <Styled.Button>농어촌민박</Styled.Button>
        <Styled.Button>미용업</Styled.Button>
      </Styled.Wrapper>
    </>
  );
};

export default Button;
