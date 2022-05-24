import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Search, Detail } from "./Pages";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <Nav style={{ zindex: 5 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
