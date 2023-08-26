import styled from 'styled-components'

export const DetailCardListElement  = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;

    @media screen and (min-width: 501px) and (max-width: 1200px) {
        flex-wrap: wrap;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`

export const DetailCardContainer = styled.div`
    background-color: #390554;
    width: 24%;
    border-radius: 8px;
    padding: 7px 8px 8px 25px;
    display: flex;
    height:230px;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 1200px) {
        width: 48%;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
    }
`

export const DetailCardContentContainer = styled.div``

export const DetailCardHeading = styled.h3`
    font-family: sans-serif;
    color: #f1f5f9;
    font-size: 17px;
    letter-spacing: 0.3px;
    margin-bottom: 14px
`

export const DetailCardTableContainer = styled.div`
    display: flex;
    padding: 0px;
    margin: 0px;
    align-items: center;
    margin-bottom: 13px;
`


export const DetailCardPara = styled.p`
    font-weight: 400;
    font-family: sans-serif;
    color: #f1f5f9;
    font-size: 14.5px;
    margin: 0px;
`

export const DetailCardSubTitle = styled(DetailCardPara)`
    width: 130px;
    font-weight: 500;
`

export const DetailCardIconContainer = styled.div`
    background-color: #960252;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    align-self: flex-end;
`

export const HorizontalRuleElement = styled.hr`
    width: 100%;
    border: solid 1px #E8E8E8;
    margin: 0px 0px 25px 0px;

    @media screen and (min-width: 1200px) {
        display: none;
    }
`