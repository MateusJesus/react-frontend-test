import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components"
import { ButtonBase } from '@mui/material';
import AppContainer from '../GlobalStyled/AppContainer';

const HeaderStyled = styled.header`
    display:flex;
    align-items:center;
    background-color: var(--bg-header);
    justify-content:center;
`

const ContentHeader = styled.div`
    padding: 0 1em;
    position: absolute fixed;
    background-color: #222222;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    height: 4.5em;
    img {
        height: 2.7em;
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
    background-color:var(--white);
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 1;
    margin-right: -2em;
`

const SearchIconStyled = styled.div`
    height: 100%;
    left: 1em;
    color: var(--search-color);
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InputBaseStyled = styled.div`
    padding-left: 3em;
    width: 100%;
    position: relative;
`

const ButtonBaseStyled = styled.div`
    button{
        color: white;
        font-weight: light;
        background-color: var(--orange);
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
        <HeaderStyled>
            <AppContainer>
                <ContentHeader>
                    <img
                        src='/assets/images/app-logo.png'
                        alt='Logo da empresa Ponto Frio'
                    />
                    <ContainerSearch>
                        <SearchTextField>
                            <SearchIconStyled>
                                <SearchIcon />
                            </SearchIconStyled>
                            <InputBaseStyled>
                                <InputBase
                                    sx={{ width: "100%" }}
                                    placeholder="Busque seu produto"
                                />
                            </InputBaseStyled>
                        </SearchTextField>
                        <ButtonBaseStyled>
                            <ButtonBase>
                                BUSCAR
                            </ButtonBase>
                        </ButtonBaseStyled>
                    </ContainerSearch>
                </ContentHeader>
            </AppContainer>
        </HeaderStyled>
    )
}

export default Header