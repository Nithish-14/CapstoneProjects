import styled from 'styled-components'

export const SidebarContainer = styled.div`
    background-color: #292929;
    width: 255px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 30px;
    height: 100%;
    border-radius: 0px 32px 0px 0px;

    @media screen and (max-width: 500px) {
        display: none;
    }
`

export const SidebarTopContainer = styled.div``

export const SidebarLogoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0px 28px;
`

export const SidebarMainHeading = styled.h1`
    font-weight: 400;
    color: #bfb8b8;
    font-family: Pacifico;
    font-size: 32px;
    margin-left: 13px;
`

export const SidebarListContainer = styled.ul`
    margin: 0px;
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    width: 100%;
`

export const SidebarListElement = styled.li`
    width: 100%;
    margin: 0px;
    display: flex;
    background-color: ${props => props.active === "true" ? "#F30050" : "transparent"};
    align-items: center;
    padding-left: 28px;
    margin-bottom: 10px;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        padding-left: 0px;
    }
`

export const SidebarPara = styled.p`
    color: #f1f5f9;
    font-family: sans-serif;
    margin-left: 13px;
`

export const SidebarBottomContainer = styled.div`
    width: 100%;
    margin: 0px;
    padding-left: 28px;
`

export const SidebarButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`