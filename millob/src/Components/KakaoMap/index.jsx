import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
const { kakao } = window;
let marker = [];
const KakaoMap = (db) => {

  console.log(db.db.length)
  const [map, setMap] = useState();

  var geocoder = new kakao.maps.services.Geocoder();
  for (let i = 0; i < db.db.length; i++) {
    geocoder.addressSearch(db.db[i].store_address, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        var city = [];
        city.push(db.db[i].store_name);
        
        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
          clickable: true,
        });

        kakao.maps.event.addListener(marker, "click", function () {
          // 마커 위에 인포윈도우를 표시합니다
          //markerClick(db[i].sidoNm);
        });

        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;" >${
            city 
          }</div>`,
        });
        infowindow.open(map, marker);
      }
    });
  }

  return (
    <Map // 지도를 표시할 Container
    center={{
      // 지도의 중심좌표
      lat: 35.58,
      lng: 128.56,
    }}
    style={{
      // 지도의 크기
      width: "100%",
      height: "300px",
    }}
    level={8} // 지도의 확대 레벨
    onCreate={setMap}
  ></Map>
  );
};


export default KakaoMap;

//오늘 초안 완료
//토요일 세부디자인 완료
//일요일 시험끝난후
