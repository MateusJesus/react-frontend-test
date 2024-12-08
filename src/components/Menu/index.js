import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components"
import { ButtonBase } from '@mui/material';

const StyledSearch = styled.header`
    width: 100%;
`

const ContentHeader = styled.div`
    position: absolute fixed;
    background-color: #222222;
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 1em;
    width: 100%;
    height: 4em;
    img {
        height: 2.5em;
    }
`

const ContainerSearch = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
`

const SearchTextField = styled.div`
    border-radius: 1.5em;
    height: 2.2em;
    background-color: #ffffff;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 1;
    margin-right: -2em;
`

const StyledSearchIcon = styled.div`
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
    width: 100%;
    position: relative;
`

const StyledButtonBase = styled.div`
    button{
        color: white;
        font-weight: light;
        background-color: #EC7F39;
        padding-left: 3em;
        padding-right: 2em;
        height: 2.2em;
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
                    alt='Logo da empresa Ponto Frio'
                />
                <ContainerSearch>
                    <SearchTextField>
                        <StyledSearchIcon>
                            <SearchIcon />
                        </StyledSearchIcon>
                        <StyledInputBase>
                            <InputBase
                                sx={{ width: "100%" }}
                                placeholder="Busque seu produto"
                            />
                        </StyledInputBase>
                    </SearchTextField>
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