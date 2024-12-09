import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyled";
import Header from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router";
import AppContainer from "./components/GlobalStyled/AppContainer";
import Produts from "./components/Produts";
import Breadcrumb from "./components/Breadcrumb";

const MainStyled = styled.main`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const MainContent = styled.div`
    padding: 1.3em;
`

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <MainStyled>
        <AppContainer>
          <MainContent>
            <Breadcrumb />
            <Routes>
              <Route path="">
                <Route index element={<Produts />} />
              </Route>
              <Route path="produtos/:id/*" element={"paia"} />
              <Route path="*" element={'<NaoEncontrada />'} />
            </Routes>
            {/* <Routes>
            <Route path="" element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path="sobremim" element={<SobreMim />} />
            </Route>
            </Routes> */}
          </MainContent>
        </AppContainer>
      </MainStyled>
    </BrowserRouter>
  );
}

export default App;
