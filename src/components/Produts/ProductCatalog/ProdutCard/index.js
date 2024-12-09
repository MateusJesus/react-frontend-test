import { ButtonBase } from "@mui/material"
import styled from "styled-components"
import '@fortawesome/fontawesome-free/css/all.min.css';


const Card = styled.div`
    background-color: var(--white);
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content:space-between;
    flex-direction:column;
    width: 10.5em;
    height: 25em;
    padding: 1.7em;
    border-radius: .4em;
    box-shadow: var(--box-shadow);
`

const CardHead = styled.div`
    text-align: center;    
    position: relative;
    h4{
        margin:0;
        padding:0;
        font-family: var(--ff-primary);
    }
    img{
        width: 100%;
    }
    i {
        position: absolute;
        right: -19px;
        top: -19px;
        font-size: 18px;
        color: var(--heart-off-color);
        transition: scale .2s ease-in-out, color .2s ease-in-out;
    }

    i:hover{
        color: var(--heart-off-color-hover);
        scale: 105%;
    }

`

const CardFooter = styled.div`
    text-align: center;  
    width: 100%;
    h3{
        color: var(--orange);
    }  
    p{
        margin:.2em 0 1em 0;
        padding:0;
    }
    button{
        color: var(--white);
        font-weight: light;
        background: var(--orange);
        background: var(--orange-gradient);
        height: 2.5em;
        border-radius: 2em;
        width: 100%;
        display: flex;
        justify-content:center;
        align-items:center;
        transition: background-color .2s ease-in-out;
    }
    button:hover{
        background:var(--orange-hover);
    }
`

const ProdutCard = ({ product }) => {
    return (
        <Card>
            <CardHead>
                <i className="fa-solid fa-heart" />
                <img
                    src={product.imageLink}
                />
                <h4>
                    {product.name}
                </h4>
            </CardHead>
            <CardFooter>
                <h3>
                    {product.points.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </h3>
                <p>Pontos</p>
                <ButtonBase>
                    VEJA MAIS
                </ButtonBase>
            </CardFooter>
        </Card>
    )
}

export default ProdutCard