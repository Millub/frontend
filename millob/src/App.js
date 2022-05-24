import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Search, Detail } from "./Pages";
import Nav from "./Components/Nav";
import { GlobalStyle } from "./globalStyled";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
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
