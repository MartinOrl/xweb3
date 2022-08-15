import styled from 'styled-components'

const WalletContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 244px;
    background: #fff ;
    box-shadow: ${props => props.theme.shadow.card};
    padding: 32px 0;
    box-sizing: border-box ;
    border-radius: 8px ;
    cursor: pointer;
    p{
        font-size: 20px;
        font-weight: 600;
        margin: 24px 0 0 0;
        color: ${props => props.theme.color.secondary};
    }
    &, p{
        transition: 250ms ease-in-out ;
    }
    img{
        height: 48px ;
        width: auto;
        display: block ;
    }
    &:hover{
        background: ${props => props.theme.color.primaryHover} ;
        p{
            color: #fff;
        }
    }
    @media screen and (max-width: ${props => props.theme.screen.md}){
        width: 100%;
    }
`


const WalletCard = ({children, action}) => {
    return(
        <WalletContainer onClick={() => action()}>
            {children}
        </WalletContainer>
    )
}

export default WalletCard