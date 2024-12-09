import ProductCatalog from "./ProductCatalog"
import styled from "styled-components"

const ProdutsContainer = styled.section`

`

const Produts = () => {
    return (
        <ProdutsContainer>
            <h1>
                Destaques da semana
            </h1>
            <ProductCatalog />
        </ProdutsContainer>
    )
}

export default Produts 