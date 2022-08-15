import { Link } from "react-router-dom";
import { Copyright, HomeContainer, Wallets, WelcomeSection } from "./homeStyles";

import { withTheme } from 'styled-components';
import MainButton from './../../components/button/button';
import Modal from "../../components/modal/modal";
import { useState } from "react";
import WalletCard from './../../components/walletCard/walletCard';

import {  useDispatch } from 'react-redux';
import { UserActions } from "../../redux/user/userReducer";
import homeArt from '../../assets/home_art.webp';
import homePages from '../../assets/home_pages.webp';
import walletConnect from '../../assets/walletConnect.webp';
import metamask from '../../assets/metamask.webp';
import logo from '../../assets/logo.webp';

const Home = (props) => {
    const [modalShow, setModalShow] = useState(false)

    const dispatch = useDispatch()


    const useConnectWallet = () => {
     
        dispatch(UserActions.setCurrentUser({
            name: "John Doe",
            createdSites: false,
            templateID: false
        }))

        setModalShow(false)
    }

    return (
        <div>
            <HomeContainer theme={props.theme}>
                <div>
                    <Link to="/" >
                        <img src={logo} alt="xweb3 logo" className="logo" />
                    </Link>
                    <WelcomeSection >
                        <h1>Welcome to XWeb3</h1>
                        <p>Connect your wallet, create an account and build your very own NFT website. It's this simple</p>
                        <MainButton>
                            <span onClick={() => setModalShow(true)} >
                                Connect
                            </span>
                        </MainButton>
                   
                    </WelcomeSection>
                    <Copyright >© XWEB3 2022, All Rights Reserved</Copyright>
                    
                </div>
                <div>
                    <img src={homeArt} alt="" />
                    <img src={homePages} alt="" />
                </div>
                
            </HomeContainer>
            <Modal active={modalShow} action={() => setModalShow(false)} title={"Connect Wallet"} subText={"Please choose one of the wallets below to create your account"}>
                <Wallets theme={props.theme}>
                    <WalletCard action={useConnectWallet} >
                        <img src={walletConnect} alt="walletconnect logo" />
                        <p>WalletConnect</p>
                    </WalletCard>
                    <WalletCard action={useConnectWallet} >
                        <img src={metamask} alt="metamask logo" />
                        <p>Metamask</p>
                    </WalletCard>
                </Wallets>
            </Modal>
        </div>
        
    );
}




export default withTheme(Home)