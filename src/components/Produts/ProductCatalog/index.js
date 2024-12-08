import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router"


const ProductCatalog = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState([])
    useEffect(() => {
        axios.post('http://localhost:5000/api/getProducts')
            .then((response) => {
                const produtos = response.data.products;
                const resultado = produtos.filter((product) =>
                    product.name.toLowerCase().includes(String(search).toLowerCase())
                );
                setProducts(resultado);
            })
            .catch((error) => console.error('Erro na pesquisa:', error));
    }, [search]);

    useEffect(() => {
        axios.post('http://localhost:5000/api/getProducts')
            .then(response => {
                setProducts(response.data.products);
            })
    }, []);
}

export default ProductCatalog