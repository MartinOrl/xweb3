import styled from 'styled-components';

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 164px;
    h2{
        margin: 0;
        font-size: 16px;
        Font-weight: 500;
    }
    

`

export const Socials = styled.div`
    a{
        opacity: 1 !important;
        display: flex !important;
        align-items: center;
        svg{
            margin-right: 12px ;
            display: block;
        }
    }
`

export const FooterContainer = styled.footer`
    
    display: flex;
    justify-content: space-between;
    margin-top: 240px;
    padding: 48px 192px 64px;
    color: ${props => props.theme.color.secondary};
    

    a{
        color: ${props => props.theme.color.secondary};
        display: block ;
        margin: 24px 0 0;
        text-decoration: none ;
        outline: none;
        opacity: 0.5
    }
    &>div:first-of-type{
        width: 280px;
        display: flex;
        flex-direction: column;
        a{
            margin: 0 0 24px;
        }
        p{
            opacity: 0.5;
            margin: 0;
            line-height: 24px;
            &:last-of-type{
                margin-top: auto;
               
            }
        }
    }
    &>div:nth-of-type(2){
        display: flex;
        column-gap: 32px;
        
    }


    @media screen and (max-width: ${props => props.theme.screen.xl}) {
        padding: 48px 168px 64px;
        &>div:nth-of-type(2){
            column-gap: 12px;
        }
        ${FooterColumn}{
            width: 128px;
        }
    }

    @media screen and (max-width: ${props => props.theme.screen.lg}) {
        padding: 48px 96px 64px;
        &>div:nth-of-type(2){
            column-gap: 0
        }
    }

    @media screen and (max-width: ${props => props.theme.screen.md}) {
        margin-top: 128px;
        padding: 48px 72px 64px;
        flex-direction: column;
        row-gap: 72px;
      
        ${FooterColumn}{
            width: 160px;
        }
    }

    @media screen and (max-width: ${props => props.theme.screen.sm}) {
        padding: 32px 56px 48px;
        margin-top: 96px ;
        align-items: center;
        &>div:first-of-type{
            align-items: center;
            p{
                width: 100%;
                text-align: center;
                &:last-of-type{
                    margin-top: 16px;
                }
            }
        }
        &>div:nth-of-type(2){
            flex-wrap: wrap;
            justify-content: center;
            row-gap: 32px;
        }
        ${FooterColumn}{
            width: 160px;
            text-align: center;
        }
        ${Socials}>div{
            align-items: center;
        }
        ${Socials} a{
            width: 114px;
        }

    }

    @media screen and (max-width: ${props => props.theme.screen.xs}) {
        padding: 24px 48px 48px;

    }
`