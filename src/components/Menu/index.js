import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components"
import { Button, ButtonBase } from '@mui/material';

const StyledSearch = styled.header`
    width: 100%;
`

const ContentHeader = styled.div`
    position: absolute fixed;
    background-color: #000000;
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 1em;
    width: 100%;
    height: 3em;
    img {
        height:2em;
    }

`

const ContainerSearch = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 100px;
    height: 2em;
    background-color: #ffffff;
    z-index: 1;
`

const SearchIconWrapper = styled.div`
    height: 100%;
    left: 1em;
    color: #c6c6c6;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledInputBase = styled.div`
    padding-left: 3em;
    input{
        width: 100%;
    }
`

const StyledButtonBase = styled.div`
    button{
        color: white;
        font-weight: light;
        position: relative;
        background-color: #EC7F39;
        padding-left: 3em;
        padding-right: 2em;
        height: 2em;
        border-radius:1em;
        display: flex;
        justify-content:center;
        align-items:center;
    }
`

const Header = () => {
    return (
        <StyledSearch>
            <ContentHeader>

                <img
                    src='/assets/images/app-logo.png'
                />
                <ContainerSearch>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase>
                        <InputBase
                            placeholder="Busque seu produto"
                        />
                    </StyledInputBase>
                    <StyledButtonBase>
                        <ButtonBase>
                            BUSCAR
                        </ButtonBase>
                    </StyledButtonBase>
                </ContainerSearch>
            </ContentHeader>
        </StyledSearch>
    )
}

export default Header