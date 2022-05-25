import React, { useState, useEffect } from "react";
import Button from "../../Components/Button";
import Map from "../../Components/Map";
import { mainApi } from "../../api/Api";

const Home = () => {
  const [id, setId] = useState(0);
  const [loc, setLoc] = useState("");
  const [name, setName] = useState("");
  const [store, setStore] = useState([1]);
  const [db, setData] = useState([]);

  useEffect(() => {
    mainApi(setData,id, loc, name, store)
    
  }, []);
console.log(typeof(id), id)
  return (
    <div>
      <Button />
      <Map />
    </div>
  );
};

export default Home;
