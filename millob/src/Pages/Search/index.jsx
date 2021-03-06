import React, { useState, useEffect } from "react";
import Button from "../../Components/Button";
import * as Styled from "./styled";
import { mainApi } from "../../api/Api";
import SearchList from "../../Components/SearchList";

const Search = () => {
  const [id, setId] = useState(0);
  const [loc, setLoc] = useState("");
  const [name, setName] = useState("");
  const [store, setStore] = useState([1]);
  const [db, setData] = useState([]);
  const [page, setPage] = useState(1);

  const onClick = (e) => {
    if (e.target.checked == true) {
      store.push(parseInt(e.target.name));
    } else {
      for (let i = 0; i < store.length; i++) {
        if (store[i] == e.target.name) {
          store.splice(i, 1);
        }
      }
    }
    console.log(store);
    mainApi(setData, page, loc, name, store);
  };

  const locChange = (e) => {
    setLoc(e.target.value);
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const locKeypress = (e) => {
    if (e.key === "Enter") {
      mainApi(setData, page, loc, name, store);
    }
  };
  const nameKeypress = (e) => {
    if (e.key === "Enter") {
        mainApi(setData, page, loc, name, store);
    }
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.StyledInput type="checkbox" onClick={onClick} id={1} name={1} />
        <Styled.StyledLabel htmlFor={1}>
          <Styled.StyledP>일반음식점</Styled.StyledP>
        </Styled.StyledLabel>
        <Styled.StyledInput type="checkbox" onClick={onClick} id={2} name={2} />
        <Styled.StyledLabel htmlFor={2}>
          <Styled.StyledP>휴게음식점</Styled.StyledP>
        </Styled.StyledLabel>
        <Styled.StyledInput type="checkbox" onClick={onClick} id={3} name={3} />
        <Styled.StyledLabel htmlFor={3}>
          <Styled.StyledP>제과점</Styled.StyledP>
        </Styled.StyledLabel>
        <Styled.StyledInput type="checkbox" onClick={onClick} id={4} name={4} />
        <Styled.StyledLabel htmlFor={4}>
          <Styled.StyledP>소매업</Styled.StyledP>
        </Styled.StyledLabel>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.StyledInput type="checkbox" onClick={onClick} id={5} name={5} />
        <Styled.StyledLabel htmlFor={5}>
          <Styled.StyledP>서비스업</Styled.StyledP>
        </Styled.StyledLabel>
        <Styled.StyledInput type="checkbox" onClick={onClick} id={6} name={6} />
        <Styled.StyledLabel htmlFor={6}>
          <Styled.StyledP>숙박업소</Styled.StyledP>
        </Styled.StyledLabel>
        <Styled.StyledInput type="checkbox" onClick={onClick} id={7} name={7} />
        <Styled.StyledLabel htmlFor={7}>
          <Styled.StyledP>농어촌민박</Styled.StyledP>
        </Styled.StyledLabel>
        <Styled.StyledInput type="checkbox" onClick={onClick} id={8} name={8} />
        <Styled.StyledLabel htmlFor={8}>
          <Styled.StyledP>미용업</Styled.StyledP>
        </Styled.StyledLabel>
      </Styled.Wrapper>

      <Styled.Container>
        <Styled.SearchWrapper>
          <Styled.SearchInput
            placeholder="주소를 검색하세요"
            onChange={locChange}
            onKeyPress={locKeypress}
          />
          <Styled.SearchInput
            onChange={nameChange}
            onKeyPress={nameKeypress}
            placeholder="상호를 검색하세요"
          />
        </Styled.SearchWrapper>
        <>
       
       {
           db != null  ? <SearchList props={db} /> : ''
       }
       </>
      </Styled.Container>
    </>
  );
};

export default Search;
