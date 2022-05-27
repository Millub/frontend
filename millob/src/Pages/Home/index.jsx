import React, { useState, useEffect } from "react";
import Button from "../../Components/Button";
import MainList from "../../Components/MainList";
import KakaoMap from "../../Components/KakaoMap";

const Home = () => {
  return (
      
    <div>
        <Button />
      
        <KakaoMap />
      <MainList />
    </div>
  );
};

export default Home;
