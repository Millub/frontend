import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { detailApi, listApi } from "../../api/Api";
import * as Styled from "./styled";

const Detail = () => {
  const location = useLocation();
  const { id } = location.state;

  const [db, setData] = useState({});
  const [list, setList] = useState([])
  const onClick = () => {
    window.location = `https://map.naver.com/v5/search/${db.store_address}`;
  };




  useEffect(() => {
    detailApi(id).then((data) => setData(data));
    listApi(id).then((data) => setList(data));
  }, []);
  return (
    <div>
      <Styled.Naver onClick={onClick}>네이버 검색</Styled.Naver>
      <Styled.Wrapper>
        <Styled.Content>
          <Styled.TitleFlex>
            <Styled.Title>상호명</Styled.Title>
            <Styled.OptionPoint>{db.store_name}</Styled.OptionPoint>
          </Styled.TitleFlex>
          <Styled.TitleFlex>
            <Styled.Title>전화번호</Styled.Title>
            <Styled.OptionPoint>{db.store_number}</Styled.OptionPoint>
          </Styled.TitleFlex>
          <Styled.TitleFlex>
            <Styled.Title>주소</Styled.Title>
            <Styled.OptionPoint>{db.store_address}</Styled.OptionPoint>
          </Styled.TitleFlex>

        </Styled.Content>
      </Styled.Wrapper>

      <Styled.Naver onClick={() => document.location.href=`tel:${db.store_number}`}>전화걸기</Styled.Naver>
    </div>
  );
};

export default Detail;
