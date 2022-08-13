import styled from 'styled-components';



export const Wallets = styled.div`
    display: flex;
    justify-content:  space-evenly;
    @media screen and (max-width: ${props => props.theme.screen.md}){
        flex-direction: column;
        align-items: center;
        row-gap: 48px
    }

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
            background: ${props => props.theme.color.primary};
            height: 100%;
            position: relative;
            img{
                position: absolute;
                &:first-of-type{
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    mix-blend-mode: overlay;
                    opacity: 0.4;
                    object-fit: cover;
                }
                &:last-of-type{
                    top: 50%;
                    left: -128px;
                    transform: translate(0,-50%) ;
                    width: 80%;
                }
            }
        }
        .logo{
            height: 72px;
        }
    }

    @media screen and (max-width: ${props => props.theme.screen.xl}){
        &>div{
            &:first-of-type{
                padding: 72px 0 48px 128px;
            }
            &:last-of-type{
                img{
                    &:last-of-type{
                        left: -32px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: ${props => props.theme.screen.lg}){
        &>div{
            &:first-of-type{
                padding: 72px 0 48px 96px;
            }
        }
        ${WelcomeSection}{
            max-width: 400px;
            p:first-of-type{
                width: 80%;
            }
        }
    }
    @media screen and (max-width: ${props => props.theme.screen.md}){
        flex-direction: column;
        align-items: center;
        &>div{
            min-height: unset;
            width: 90% !important;
            &:first-of-type{
                padding: 56px 24px 96px;
                align-items: center;
                p:last-of-type{
                    width: 90%;
                    &>*{
                        font-size: 1.2rem;
                        padding: 16px 0;
                        width: 100%;
                        justify-content: center;
                    }
                }
            }
            &:last-of-type{
                background: transparent;
                img{
                    &:first-of-type{
                        display: none;
                    }
                    &:last-of-type{
                        position: relative;
                        left: unset;
                        top: unset;
                        transform: unset;
                        width: 100%;
                    }
                }
            }
        }
        ${WelcomeSection}{
            max-width: unset;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding-bottom: 72px;
            h1{
                margin-bottom: 20px ;
            }
        }
        ${Copyright}{
            text-align: center;
        }
    }
    
`