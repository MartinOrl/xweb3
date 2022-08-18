import styled from 'styled-components'

export const CollapseToggle = styled.div`
    height: 20px;
    display: none ;
    flex-direction: column ;
    justify-content: space-between ;
    cursor: pointer ;
    span{
        display: block;
        width: 32px;
        height: 3px;
        background-color: ${props => props.theme.color.secondary};
        content: '' ;
        border-radius: 8px ;
        transition: 300ms ease-in-out ;
        &:nth-of-type(1){
            width: 32px
        }
        &:nth-of-type(2){
            width: ${props => props.isOpen ? '32px' : '26px'};
        }
        &:nth-of-type(3){
            width: ${props => props.isOpen ? '32px' : '20px'};
        }

    }
    @media screen and (max-width: ${props => props.theme.screen.sm}) {
        display: flex;
    }
`

export const Collapsible = styled.div`
    
    &>div{
        display: flex;
        align-items: center ;

    }
    span{
        height: 32px;
        width:2px ;
        background: ${props => props.theme.color.secondary};
        opacity: 0.1 ;
        margin: 0 24px;
        display: block;
        content: '' ;
    }
    &>div>div{
        display: flex;
        align-items: center;
        cursor: pointer ;
    }
    p{
        margin: 0 12px 0 0;
  
    }
    a{
        font-family: 'Inter', sans-serif ;
        font-size: 16px;
        text-decoration: none;
        color: ${props => props.theme.color.secondary};
    }

    @media screen and (max-width: ${props => props.theme.screen.sm}) {
        max-height: 0;
        overflow: visible;
        position: relative; ;
        
        &>div{
            flex-direction: column;
            width: 100%;
            transition: 300ms ease-in-out ;
        
            box-sizing: border-box ;
            position: absolute;
            z-index: 3 ;
            top: 0;
            padding-top: ${props => props.isOpen ? '56px' : '0'};
            background: #fff ;
            height: 100vh;
            max-height: ${props => props.isOpen ? '100vh' : '0'};
            overflow: hidden ;
        }
        
        span{
            width: 60%;
            height: 2px;
            margin: 24px 0;
        }
    }

`

export const UserDropdown = styled.div`
    height: 48px;
    overflow: visible;
    display: flex;
    align-items: center;
    position: relative;
    &>div{
        &:last-of-type{
            position: absolute;
            bottom: ${props => props.userMenuDrop ? '-72px' : '-24px'};
            left: 0;
            max-height: ${props => props.userMenuDrop ? '96px' : '0'};
            overflow: hidden;
            transition: 300ms ease-in-out;
            width: 100%;
            border-radius: 8px;
            box-shadow: ${props => props.userMenuDrop ? props.theme.shadow.card : '0px 0px 0px rgba(0,0,0,0)'};
            p{
                padding: 16px 32px;
                box-sizing: border-box;
                margin: 0;
                display: flex;
                align-items: center;
                column-gap: 16px;
                background: #fff;
                &, path{
                    transition: 300ms ease-in-out;
                    opacity: ${props => props.userMenuDrop ? '1' : '0'};
                
                }
                &:hover{
                    background: ${props => props.theme.color.secondary};
                    color: #fff;
                    
                    svg path{
                        fill: #fff;
                    }
                }
            }

        }
    }

`



export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center ;
    padding: 32px 192px;
    
    .logo{
        height: 56px ;
    }

    &>div{
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: ${props => props.theme.screen.xl}) {
        padding: 32px 168px;
    }

    @media screen and (max-width: ${props => props.theme.screen.lg}) {
        padding: 32px 96px;
    }

    @media screen and (max-width: ${props => props.theme.screen.md}) {
        padding: 32px 72px;
    }

    @media screen and (max-width: ${props => props.theme.screen.sm}) {
        padding: 32px 56px;
        flex-direction: column;
        &>div{
            width: 100%;
            &:first-of-type{
                justify-content: space-between ;
            }
        }

    }

    @media screen and (max-width: ${props => props.theme.screen.xs}) {
        padding: 24px 48px;

    }

`