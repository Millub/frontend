import React from "react";
import * as Styled from "./styled";
import {useNavigate} from 'react-router-dom'
const SearchList = ({props}) => {

    console.log(props)
  return (
    <Styled.FlexWrap>
      <Styled.FullWrapSub>
        {props ? props.map((row, i) => {
          return (
            <Subject
              key={row.store_idx}
              id={row.store_idx}
              name={row.store_name}
              number={row.store_number}
              address={row.store_address}
            />
          );
        }) : ''}
      </Styled.FullWrapSub>
    </Styled.FlexWrap>
  );
};

export const Subject = (props) => {
  let navigate = useNavigate();

  return (
    <Styled.LectureWrapper onClick={() => navigate(`/detail`, {
      state: {
        id: props.id,
      },
    })}>
      <Styled.MarginTop>
        <Styled.TitleWrapper>
          <Styled.Title>{props.name}</Styled.Title>
          <Styled.Option>{props.number}</Styled.Option>
        </Styled.TitleWrapper>
        <Styled.Professor>{props.address}</Styled.Professor>
        <Styled.RateWrapper></Styled.RateWrapper>
      </Styled.MarginTop>
    </Styled.LectureWrapper>
  );
};

export default SearchList;
