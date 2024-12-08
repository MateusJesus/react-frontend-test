import { useLocation } from "react-router"
import AppContainer from "../GlobalStyled/AppContainer"
import ProductCatalog from "./ProductCatalog"
import styled from "styled-components"

const ProdutsContainer = styled.section`
`

const Produts = () => {
    const local = useLocation()
    console.log(local)
    return (
        <ProdutsContainer>
            <h1>
                Destaques da Semana
            </h1>
            <ProductCatalog />
        </ProdutsContainer>
    )
}

export default Produts 