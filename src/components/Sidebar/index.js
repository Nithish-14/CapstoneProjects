import {React, Component} from 'react'
import {Link} from 'react-router-dom'
import {TbVectorBezierCircle, TbBoxMultiple} from 'react-icons/tb'
import {MdToken} from 'react-icons/md'
import {FaFacebookSquare, FaLinkedin, FaTwitterSquare} from 'react-icons/fa'

import { SidebarBottomContainer, SidebarContainer, SidebarButton, SidebarListContainer, SidebarListElement, SidebarLogoContainer, SidebarMainHeading, SidebarPara, SidebarTopContainer } from './styledComponents'

class Sidebar extends Component {
    state = {currentCategory: "Token"}

    render() {
        const {currentCategory} = this.state; 

        return (
            <SidebarContainer>
                <SidebarTopContainer>
                    <SidebarLogoContainer>
                        <TbVectorBezierCircle color="#ffffff" size={27} />
                        <SidebarMainHeading>nFTify</SidebarMainHeading>
                    </SidebarLogoContainer>
                    <SidebarListContainer>
                        <Link className="link-element" to="/">
                            <SidebarListElement onClick={() => this.setState({currentCategory: "Token"})} active={(currentCategory === "Token").toString()}>
                                <MdToken size={27} color="#ffffff" />
                                <SidebarPara>Token Address</SidebarPara>
                            </SidebarListElement>
                        </Link>
                        <Link className="link-element" to="/pair">
                            <SidebarListElement onClick={() => this.setState({currentCategory: "Pair"})} active={(currentCategory === "Pair").toString()}>
                                <TbBoxMultiple size={27} color="#ffffff" />
                                <SidebarPara>Pair Address</SidebarPara>
                            </SidebarListElement>
                        </Link>
                    </SidebarListContainer>
                </SidebarTopContainer>
                <SidebarBottomContainer>
                    <SidebarButton type="button"><FaFacebookSquare size={27} color="#F30050" style={{marginRight: '15px'}} /></SidebarButton>
                    <SidebarButton type="button"><FaLinkedin size={27} color="#F30050" style={{marginRight: '15px'}} /></SidebarButton>
                    <SidebarButton type="button"><FaTwitterSquare size={27} color="#F30050" style={{marginRight: '15px'}} /></SidebarButton>
                </SidebarBottomContainer>
            </SidebarContainer>
        )
    }
}

export default Sidebar