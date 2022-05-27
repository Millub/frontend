import React, { useState } from "react";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";
const Button = () => {

    let navigate = useNavigate();

  const onClick = (e) => {

    navigate('/change', {
        state: {
          type: e.target.value,
        }})


  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.Button onClick={onClick} value={1}>
          일반음식점
        </Styled.Button>
        <Styled.Button onClick={onClick} value={2}>
          휴게음식점
        </Styled.Button>
        <Styled.Button onClick={onClick} value={3}>
          제과점
        </Styled.Button>
        <Styled.Button onClick={onClick} value={4}>
          소매업
        </Styled.Button>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.Button onClick={onClick} value={5}>
          서비스업
        </Styled.Button>
        <Styled.Button onClick={onClick} value={6}>
          숙박업소
        </Styled.Button>
        <Styled.Button onClick={onClick} value={7}>
          농어촌민박
        </Styled.Button>
        <Styled.Button onClick={onClick} value={8}>
          미용업
        </Styled.Button>
      </Styled.Wrapper>
    </>
  );
};

export default Button;
