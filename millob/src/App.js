import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Search, Detail, Change } from "./Pages";
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
        <Route path="/change" element={<Change />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
