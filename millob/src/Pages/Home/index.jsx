import React, { useState, useEffect } from "react";
import Button from "../../Components/Button";
import Map from "../../Components/Map";
import { mainApi } from "../../api/Api";
import MainList from "../../Components/MainList";

const Home = () => {
  return (
      
    <div>
        <Button />
      <MainList />
    </div>
  );
};

export default Home;
