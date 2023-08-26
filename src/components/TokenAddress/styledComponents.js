import styled from 'styled-components'

export const AddressContainer = styled.div`
    height: 100%;
    width: calc(100% - 255px);
    display: flex;
    flex-direction: column;
    padding: 30px;
    padding-bottom: 0px;

    @media screen and (max-width: 500px) {
        width: 100%;
    }
`

export const AddressTopContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-left: 14px;
    margin-bottom: 25px;

    @media screen and (max-width: 500px) {
        display: none;
    }
`

export const AddressTopContainerMobileView = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (min-width: 501px) {
        display: none;
    }
`

export const AddressTopNavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AddressTopHamburgerContainer = styled.div`
    display: flex;
    align-items: center;
`

export const AddressTopLogoHeading = styled.h3`
    font-family: Pacifico;
    color: #f1f5f9;
    font-size: 20px;
    font-weight: 500;
    margin-left: 9px;
`

export const SearchContainer = styled.div`
    padding: 0px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: solid 1px #f1f5f9;
    border-radius: 20px;
`

export const SearchInput = styled.input`
    background-color: transparent;
    width: 300px;
    outline: none;
    padding: 12px;
    margin: 0px;
    border: none;
    color: #f1f5f9;
    font-size: 15px;
    font-weight: 600;
`

export const SearchButton = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    padding-right: 12px;
    margin: 0px;
`

export const ConnectButton = styled.button`
    outline: none;
    cursor: pointer;
    border-width: 0px;
    border-radius: 18px;
    background-image: linear-gradient(to right, #7C0F35, #581266);
    text-align: center;
    padding: 14px 39px;
    font-family: sans-serif;
    color: #f1f5f9;
    font-weight: 600;

    @media screen and (max-width: 500px) {
        padding: 10px 30px;
    }
`

export const PageHeading = styled.h2`
    font-family: sans-serif;
    color: #f1f5f9;
    font-size: 22px;
    letter-spacing: 0.3px;

    @media screen and (max-width: 500px) {
        margin-left: 20px;
    }
`

export const SearchResultsContainer = styled.ul`
    padding: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0px;
    height: 100%;
    overflow-y: auto;
`

export const LoaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HamContainer = styled.div`
    background-color: transparent;
    height: ${props => props.show === "true" ? '120px' : '0px'};
    width: 100%;
    flex-direction: column;
    padding: 0px;
    transition: height 0.3s ease;
    overflow: hidden;

    @media screen and (min-width: 501px) {
        display: none;
    }
`