import React, { useState, useEffect } from "react";
import Button from "../../Components/Button";
import Map from "../../Components/Map";
import { mainApi } from "../../api/Api";
import MainList from "../../Components/MainList";

const Home = () => {
 
  return (
    <div>
      <Button />
      <div>
      <MainList />

      </div>
    </div>
  );
};

export default Home;
