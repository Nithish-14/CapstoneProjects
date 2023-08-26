import {React, Component} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx'
import {TbBoxMultiple} from 'react-icons/tb'
import {MdToken} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import DetailCard from '../DetailCard'

import { AddressContainer, HamContainer, AddressTopContainer, SearchContainer, AddressTopNavContainer, AddressTopLogoHeading, AddressTopHamburgerContainer, AddressTopContainerMobileView, SearchInput, SearchButton, ConnectButton, PageHeading, SearchResultsContainer, LoaderContainer } from './styledComponents'
import { SidebarListContainer, SidebarPara, SidebarListElement } from '../Sidebar/styledComponents'

const apiStatus = {
    initial: "INITIAL",
    progress: "IN_PROGRESS",
    success: "SUCCESS",
    failure: "FAILURE"
}

const tokenUrl = "https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
const searchUrl = "https://api.dexscreener.com/latest/dex/search/?q="

class TokenAddress extends Component {
    state = {searchResult: [], status: apiStatus.initial, searchInput: "", ham: false}

    componentDidMount() {
        this.getTokenAddress(tokenUrl)
    }

    getTokenAddress = async (url) => {
        this.setState({status: apiStatus.progress})

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({searchResult: data.pairs.slice(0, 10), status: apiStatus.success})
        } else {
            this.setState({status: apiStatus.failure})
        }
    }

    successRender = () => {
        const {searchResult} = this.state;

        return searchResult.map((each, idx) => <DetailCard pair={each} key={idx} />)
    }

    onChangeSearchInput = (event) => {
        this.setState({searchInput: event.target.value})
    }

    onKeyDownSearchInput = (event) => {
        const {searchInput} = this.state;
        if (event.key === "Enter") {
            this.getTokenAddress(`${searchUrl}${searchInput}`)
        }
    }

    onClickSearchButton = () => {
        const {searchInput} = this.state;

        this.getTokenAddress(`${searchUrl}${searchInput}`)
        
    }

    renderLoader = () => (
        <LoaderContainer>
            <Loader type="TailSpin" color="#f1f5f9" height={40} width={40} />
        </LoaderContainer>
    )

    onClickHamburgerMenu = () => {
        this.setState(prevState => ({ham: !prevState.ham}))
    }

    switchRender = (status) => {
        switch (status) {
            case "IN_PROGRESS":
                return this.renderLoader();
            case "SUCCESS":
                return this.successRender();
            case 'FAILURE':
                return (<LoaderContainer>
                    <PageHeading>No Search Results Found</PageHeading>
                </LoaderContainer>)
            default:
                return null;
        }
    } 

    render() {
        const {status, searchInput, ham} = this.state;
        
        return (
            <AddressContainer>
                <AddressTopContainerMobileView>
                    <AddressTopNavContainer>
                        <AddressTopHamburgerContainer>
                            <RxHamburgerMenu onClick={this.onClickHamburgerMenu} color="#ffffff" size={25} />
                            <AddressTopLogoHeading>nFTify</AddressTopLogoHeading>
                        </AddressTopHamburgerContainer>
                        <ConnectButton type="button">Connect</ConnectButton>
                    </AddressTopNavContainer>
                    <HamContainer show={ham.toString()}>
                        <SidebarListContainer>
                            <Link className="link-element" to="/">
                                <SidebarListElement active={'false'}>
                                    <MdToken size={27} color="#ffffff" />
                                    <SidebarPara>Token Address</SidebarPara>
                                </SidebarListElement>
                            </Link>
                            <Link className="link-element" to="/pair">
                                <SidebarListElement active={'false'}>
                                    <TbBoxMultiple size={27} color="#ffffff" />
                                    <SidebarPara>Pair Address</SidebarPara>
                                </SidebarListElement>
                            </Link>
                        </SidebarListContainer>
                    </HamContainer>
                    <SearchContainer>
                        <SearchInput type="search" onKeyDown={this.onKeyDownSearchInput} value={searchInput} onChange={this.onChangeSearchInput} placeholder="Search" />
                        <SearchButton type="button" onClick={this.onClickSearchButton}><AiOutlineSearch color="#f1f5f9" size={21} /></SearchButton>
                    </SearchContainer>
                </AddressTopContainerMobileView>
                <AddressTopContainer>
                    <SearchContainer>
                        <SearchInput type="search" onKeyDown={this.onKeyDownSearchInput} value={searchInput} onChange={this.onChangeSearchInput} placeholder="Search" />
                        <SearchButton type="button" onClick={this.onClickSearchButton}><AiOutlineSearch color="#f1f5f9" size={21} /></SearchButton>
                    </SearchContainer>
                    <ConnectButton type="button">Connect</ConnectButton>
                </AddressTopContainer>
                <PageHeading>Token Search Results</PageHeading>
                <SearchResultsContainer>{this.switchRender(status)}</SearchResultsContainer>
            </AddressContainer>
        )
    }
}

export default TokenAddress