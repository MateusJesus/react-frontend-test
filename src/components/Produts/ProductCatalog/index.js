import axios from "axios";
import { useEffect, useState } from "react";
import ProdutCard from "./ProdutCard";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

const Catalog = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
    gap: 1em;
    li{
        transition: transform .2s;
    }
    li:hover {
        transform: translateY(-5px)
    }
`

const ProductCatalog = () => {
    // const [search, setSearch] = useState([])
    // useEffect(() => {
    //     axios.post('http://localhost:5000/api/getProducts')
    //         .then((response) => {
    //             const produtos = response.data.products;
    //             const resultado = produtos.filter((product) =>
    //                 product.name.toLowerCase().includes(String(search).toLowerCase())
    //             );
    //             setProducts(resultado);
    //         })
    //         .catch((error) => console.error('Erro na pesquisa:', error));
    // }, [search]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:5000/api/getProducts')
            .then(response => {
                setProducts(response.data.products);
            })
    }, []);

    return (
        <Catalog>
            {products.length === 0 ?
                <CircularProgress color="secondary" /> :
                products.map(prod =>
                    <li key={prod.id}>
                        <ProdutCard
                            product={prod}
                        />
                    </li>
                )
            }
        </Catalog>
    )
}

export default ProductCatalog