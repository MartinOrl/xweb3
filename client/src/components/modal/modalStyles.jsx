import styled from 'styled-components';


export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: ${props => props.active ? "0" : "-100%"};
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    transition: 400ms ease-in-out ;

`

export const ModalContent = styled.div`
    width: 854px;
    border-radius: 16px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 15%;
    transform: ${props => props.active ? "translate(-50%,0)" : "translate(-50%, 72px)"};
    opacity: ${props => props.active ? "1" : "0"};
    padding: 48px 56px 72px;
    box-sizing: border-box ;
    transition: 300ms ease-in-out ;
    transition-delay: 300ms ;
    @media screen and (max-width: ${props => props.theme.screen.md}){
        width: 80%;
        padding: 48px 48px 64px;
        top: 48px;
    }
    @media screen and (max-width: ${props => props.theme.screen.sm}){
        padding: 40px 32px 56px;
    }

`

export const ModalHeading = styled.div`
    position: relative;
    display: flex;
    flex-direction: column ;
    align-items: center;
    text-align: center;
    color: ${props => props.theme.color.secondary};
    margin-bottom: 56px ;
    h1{
        margin: 0 0 24px;
        font-size: 32px;
        font-weight: 500;
    }
    p{
        opacity: 0.5 ;
        margin: 0 ;
        width: 400px ;
        line-height: 24px;
    }
    svg{
        position: absolute;
        right: -40px;
        top: -48px ;
        background: #fff;
        padding: 8px;
        box-sizing: border-box;
        border-radius: 50%;
        box-shadow: ${props => props.theme.shadow.card};
        cursor: pointer ;
        width: 40px;
        height: 40px;
    }
    @media screen and (max-width: ${props => props.theme.screen.md}){
        p{
            width: 80%;
        }
        h1{
            width: 70%;
        }
        margin-bottom: 32px;
    }
    @media screen and (max-width: ${props => props.theme.screen.sm}){
       
    }
`