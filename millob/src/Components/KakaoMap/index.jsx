import React, { useEffect } from "react";
const { kakao } = window;
const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: "100vw",
        height: "40vh",
      }}
    ></div>
  );
};

export default KakaoMap;

//오늘 초안 완료
//토요일 세부디자인 완료
//일요일 시험끝난후
