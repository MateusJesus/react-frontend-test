import styled from "styled-components";
import axios from 'axios';
import { useEffect, useState } from "react";
import GlobalStyles from "./components/GlobalStyled";

const MainSyled = styled.main`
    background-color: black;
    min-height: 100vh;
    width:100%;
    color: white;
`

function App() {
  // const [products, setProducts] = useState([]);
  // const [search, setSearch] = useState([])

  // useEffect(() => {
  //   axios.post('http://localhost:5000/api/getProducts')
  //     .then((response) => {
  //       const produtos = response.data.products;
  //       const resultado = produtos.filter((product) =>
  //         product.name.toLowerCase().includes(String(search).toLowerCase())
  //       );
  //       setProducts(resultado);
  //     })
  //     .catch((error) => console.error('Erro na pesquisa:', error));
  // }, [search]);

  // useEffect(() => {
  //   axios.post('http://localhost:5000/api/getProducts')
  //     .then(response => {
  //       setProducts(response.data.products);
  //     })
  // }, []);

  return (
    <main>
      <GlobalStyles/>
        <h1>Ola mundo</h1>
    </main>
  );
}

export default App;
