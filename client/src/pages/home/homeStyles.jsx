import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    &>div{
        min-height: 100vh ;
        &:first-of-type{
            width: 55%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 72px 0 48px 192px;
        }
        &:last-of-type{
            width: 45%;
        }
        .logo{
            height: 72px;
        }
    }
    
`

export const Wallets = styled.div`
    display: flex;
    justify-content:  space-evenly;

`

export const WelcomeSection = styled.div`
    max-width: 450px ;
    padding-bottom: 144px ;
    box-sizing: border-box ;
    color: ${props => props.theme.color.secondary};
    &>h1{
        font-size: 48px ;
        font-weight: 500;
        margin: 0 0 12px;
    }
    &>p:first-of-type{
        font-size: 16px;
        margin: 0 0 56px;
        line-height: 24px;
        opacity: 0.5  ;
    }
`

export const Copyright = styled.p`
    color: ${props => props.theme.color.secondary};
    opacity: 0.4 ;
`
