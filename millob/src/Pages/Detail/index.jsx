import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { detailApi, listApi } from "../../api/Api";
import * as Styled from "./styled";
import KakaoMap from "../../Components/KakaoMap";

const Detail = () => {
  const location = useLocation();
  const { id } = location.state;

  const [db, setData] = useState({});
  const [list, setList] = useState([]);

  const [hide, setHide] = useState(false);

    const onClick = () => {
    window.location = `https://m.map.naver.com/search2/search.naver?query=${String(db.store_address).slice(0,9) + db.store_name}`;
  };

  const onHide = () => {
    setHide(!hide)
  }

  useEffect(() => {
    detailApi(id).then((data) => setData(data));
    listApi(setList, id);
  }, []);



  return (
    <Styled.Container>
      <KakaoMap db={[db]} />
      
      <Styled.Button onClick={onClick} background="#83dcb7">네이버 검색</Styled.Button>
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

  <Styled.Button onClick={onHide} background="#346cfd">상품종류   {list.length}개</Styled.Button>

      {hide ?list.map((i) => (
        <Styled.Wrapper key={i.detail_idx}>
          <Styled.Content>
            <Styled.TitleFlex>
              <Styled.Title>상품명</Styled.Title>
              <Styled.OptionPoint>{i.detail_name}</Styled.OptionPoint>
            </Styled.TitleFlex>
            <Styled.TitleFlex>
              <Styled.Title>가격</Styled.Title>
              <Styled.OptionPoint>{i.detail_price}</Styled.OptionPoint>
            </Styled.TitleFlex>
          </Styled.Content>
        </Styled.Wrapper>
      )) : ''}

      <Styled.Button
      background="#50bcdf"
        onClick={() => (document.location.href = `tel:${db.store_number}`)}
      >
        전화걸기
      </Styled.Button>
    </Styled.Container>
  );
};

export default Detail;
