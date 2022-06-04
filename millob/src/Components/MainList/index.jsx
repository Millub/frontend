import React, { useState, useEffect } from "react";
import * as Styled from "./styled";
import { mainApi } from "../../api/Api";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";
import KakaoMap from "../KakaoMap";
const MainList = () => {
  const [id, setId] = useState(0);
  const [loc, setLoc] = useState("");
  const [name, setName] = useState("");
  const [store, setStore] = useState([1]);
  const [db, setData] = useState([]);
 


  const [target, setTarget] = useState(null);
  const [page, setPage] = useState(1);

  const [itemLists, setItemLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await mainApi(setData, page, loc, name, store);
    setItemLists(itemLists.concat(db));

    setIsLoaded(false);
  };

  useEffect(() => {
    console.log("page ? ", page);
    getMoreItem();

  }, [page]);

  const onIntersect = async (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setPage((prev) => prev + 20);
        

        // 현재 타겟을 unobserve한다.
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 1,
      });
      observer.observe(target);
    }
    console.log(itemLists);


    return () => observer && observer.disconnect();
  }, [itemLists]);


  return (
  <>
  <KakaoMap db={itemLists}/>
 
 

    <Styled.FlexWrap style={{marginTop: '10px'}}>
      <Styled.FullWrapSub>
        {itemLists.map((row, i) => {
          return (
            <Subject
              key={row.store_idx}
              id={row.store_idx}
              name={row.store_name}
              number={row.store_number}
              address={row.store_address}
            />
          );
        })}
        <div ref={setTarget} className="Target-Element">
        {isLoaded && <Loader />}
      </div>
      </Styled.FullWrapSub>
    </Styled.FlexWrap>
   
</> 
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

export default MainList;
