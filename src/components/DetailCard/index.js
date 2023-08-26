import {React} from 'react'
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import {MdOutlineToken} from 'react-icons/md'
import {FaDollarSign} from 'react-icons/fa'
import { DetailCardListElement, DetailCardContainer, HorizontalRuleElement, DetailCardContentContainer, DetailCardHeading, DetailCardTableContainer, DetailCardSubTitle, DetailCardPara, DetailCardIconContainer } from './styledComponents';

const DetailCard = ({pair}) => (
        <>
            <DetailCardListElement>
                <DetailCardContainer>
                    <DetailCardContentContainer>
                        <DetailCardHeading>Basic Info</DetailCardHeading>
                        <DetailCardTableContainer>
                            <DetailCardSubTitle>Pair created at</DetailCardSubTitle>
                            <DetailCardPara>Etherium</DetailCardPara>
                        </DetailCardTableContainer>
                        <DetailCardTableContainer>
                            <DetailCardSubTitle>Symbol</DetailCardSubTitle>
                            <DetailCardPara>{pair.baseToken.symbol}</DetailCardPara>
                        </DetailCardTableContainer>
                        <DetailCardTableContainer>
                            <DetailCardSubTitle>Dex ID</DetailCardSubTitle>
                            <DetailCardPara>{pair.dexId}</DetailCardPara>
                        </DetailCardTableContainer>
                        <DetailCardTableContainer>
                            <DetailCardSubTitle>Pair Address</DetailCardSubTitle>
                            <DetailCardPara>{pair.pairAddress.slice(0,6)}..</DetailCardPara>
                        </DetailCardTableContainer>
                    </DetailCardContentContainer>
                    <DetailCardIconContainer>
                        <AiOutlineExclamationCircle size={21} color="#ffffff" />
                    </DetailCardIconContainer>
                </DetailCardContainer>
                <DetailCardContainer>
                    <DetailCardContentContainer>
                        <DetailCardHeading>Base Token</DetailCardHeading>
                        <DetailCardTableContainer>
                            <DetailCardSubTitle>Name</DetailCardSubTitle>
                            <DetailCardPara>{pair.baseToken.name}</DetailCardPara>
                        </DetailCardTableContainer>
                        <DetailCardTableContainer>
                            <DetailCardSubTitle>Symbol</DetailCardSubTitle>
                            <DetailCardPara>{pair.baseToken.symbol}</DetailCardPara>
                        </DetailCardTableContainer>
                        <DetailCardTableContainer>
                            <DetailCardSubTitle>Address</DetailCardSubTitle>
                            <DetailCardPara>{pair.baseToken.address.slice(0,6)}</DetailCardPara>
                        </DetailCardTableContainer>
                    </DetailCardContentContainer>
                    <DetailCardIconContainer>
                        <MdOutlineToken size={21} color="#ffffff" />
                    </DetailCardIconContainer>
                </DetailCardContainer>
                <DetailCardContainer>
                    <DetailCardContentContainer>
                        <DetailCardHeading>Quote Token</DetailCardHeading>
                        <DetailCardTableContainer>
                            <DetailCardSubTitle>Name</DetailCardSubTitle>
                            <DetailCardPara>{pair.quoteToken.name}</DetailCardPara>
                        </DetailCardTableContainer>
                        <DetailCardTableContainer>
                            <DetailCardSubTitle>Symbol</DetailCardSubTitle>
                            <DetailCardPara>{pair.quoteToken.symbol}</DetailCardPara>
                        </DetailCardTableContainer>
                        <DetailCardTableContainer>
                            <DetailCardSubTitle>Address</DetailCardSubTitle>
                            <DetailCardPara>{pair.quoteToken.address.slice(0,6)}</DetailCardPara>
                        </DetailCardTableContainer>
                    </DetailCardContentContainer>
                    <DetailCardIconContainer>
                        <MdOutlineToken size={21} color="#ffffff" />
                    </DetailCardIconContainer>
                </DetailCardContainer>
                <DetailCardContainer>
                    <DetailCardContentContainer>
                        <DetailCardHeading>Price</DetailCardHeading>
                        <DetailCardTableContainer>
                            <DetailCardSubTitle>Price Native</DetailCardSubTitle>
                            <DetailCardPara>{pair.priceNative}</DetailCardPara>
                        </DetailCardTableContainer>
                        <DetailCardTableContainer>
                            <DetailCardSubTitle>Price USD</DetailCardSubTitle>
                            <DetailCardPara>{pair.priceUsd}</DetailCardPara>
                        </DetailCardTableContainer>
                    </DetailCardContentContainer>
                    <DetailCardIconContainer>
                        <FaDollarSign size={21} color="#ffffff" />
                    </DetailCardIconContainer>
                </DetailCardContainer>
            </DetailCardListElement>
            <HorizontalRuleElement />
        </>

)

export default DetailCard