import { Link } from "react-router-dom";
import { Copyright, HomeContainer, Wallets, WelcomeSection } from "./homeStyles";

import logo from '../../assets/logo.png';
import { withTheme } from 'styled-components';
import MainButton from './../../components/button/button';
import Modal from "../../components/modal/modal";
import { useState } from "react";
import WalletCard from './../../components/walletCard/walletCard';

import metamask from '../../assets/metamask.png';
import walletConnect from '../../assets/walletConnect.png';
import { SetCurrentUser } from "../../redux/user/userActions";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectActiveUser } from './../../redux/user/userSelectors';

const Home = (props) => {
    const [modalShow, setModalShow] = useState(false)

    const useConnectWallet = () => {
        props.setUser({
            name: "John Doe",
            createdSites: false,
        })
        setModalShow(false)
    }

    return (
        <div>
            <HomeContainer>
                <div>
                    <Link to="/" >
                        <img src={logo} alt="xweb3 logo" className="logo" />
                    </Link>
                    <WelcomeSection >
                        <h1>Welcome to XWeb3</h1>
                        <p>Connect your wallet, create an account and build your very own NFT website. It's this simple</p>
                        <MainButton  text={"Connect"} action={() => setModalShow(true)} />
                   
                    </WelcomeSection>
                    <Copyright >© XWEB3 2022, All Rights Reserved</Copyright>
                    
                </div>
                <div>

                </div>
                
            </HomeContainer>
            <Modal active={modalShow} action={() => setModalShow(false)} title={"Connect Wallet"} subText={"Please choose one of the wallets below to create your account"}>
                <Wallets>
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

// const mapStateToProps = createStructuredSelector({
//     user: selectActiveUser
// })

const mapDispatchToProps = dispatch => ({
    setUser: (user) => dispatch(SetCurrentUser(user))
})


export default connect(null,mapDispatchToProps)(withTheme(Home)) 