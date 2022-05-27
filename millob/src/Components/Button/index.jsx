import React, { useState } from "react";
import * as Styled from "./styled";

const Button = () => {
  const [type, setType] = useState(false);
  let num = [];

  const onClick = (e) => {

    if(type == true){
        console.log('dd')

        for (let i = 0; i < num.length; i++) {
            if (num[i] == e.target.value) {
              num.splice(i, 1);
              setType(false)
                console.log(num);

            }
          }
         
    }
    else if(type != true){
        num.push(e.target.value)
        setType(true)
        console.log('ee')
        console.log(num);

    }else{
        console.log('뭐야')
    }
  


    


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
