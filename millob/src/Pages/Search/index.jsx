import React, { useState, useEffect } from "react";
import Button from "../../Components/Button";
import * as Styled from "./styled";
import { mainApi } from "../../api/Api";
import SearchList from "../../Components/SearchList";

const Search = () => {
  const [id, setId] = useState(0);
  const [loc, setLoc] = useState("");
  const [name, setName] = useState("");
  const [store, setStore] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [db, setData] = useState([]);
  const [page, setPage] = useState(1);

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
      <Button />

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
