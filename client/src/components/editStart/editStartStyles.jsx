import styled from 'styled-components'

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: max-content;
    margin-top: 96px;
    &>p:last-of-type{
        color: ${props => props.theme.color.secondaryOpaque};
        a{
            color: ${props => props.theme.color.primary};
            margin-right: 8px ;
            font-weight: 500;
        }
    }
    &>p:first-of-type>*{
        padding: 18px 72px;
        font-size: 20px
    }

    @media screen and (max-width: ${props => props.theme.screen.lg}) {
        margin-top: 56px;
        margin-bottom: 96px ;
        margin-left: auto;
        margin-right: auto;
    }
    
`

export const StartForm = styled.form`
    label,input,button{
        font-family: 'Inter', sans-serif;
        display: block;
    }
    label{
        font-size: 14px;
        color: ${props => props.theme.color.secondaryOpaque};
        margin-bottom: 8px;
        font-weight: 600;
        margin-top: 56px;
        display: block;
    }
    input{
        background: none;
        outline: none;
        border: none;
        padding: 8px;
        box-sizing: border-box ;
        color: ${props => props.theme.color.secondary};
        font-weight: 500 ;
        font-size: 16px;
        width: 75%;
        border-bottom: 1px solid ${props => props.theme.color.secondaryOpaque};
        margin-bottom: 32px ;
       
       
    }

    @media screen and (max-width: ${props => props.theme.screen.lg}){
        input{
            width: 100%;
        }
    }
`

export const Container = styled.div`
    padding: 88px 192px 0;
    color: ${props => props.theme.color.secondary};
    display: flex;
    justify-content: space-between;
    h2{
        font-size: 48px;
        line-height: 62px ;
        text-transform: capitalize ;
        font-weight: 500 ;
        width: 400px;
        margin: 0 0 12px;
    }

    &>div{
        width: 40%;
        max-width: 450px;
        p:first-of-type{
            max-width: 445px;
            width: 100%;
            color: ${props => props.theme.color.secondaryOpaque};
            line-height: 24px;
            margin: 0;
        }
    }

    &>img{
        width: 57%;
        height: auto;
        aspect-ratio: 16/9;
        object-fit: contain;
    }
    
    @media screen and (max-width: ${props => props.theme.screen.xl}) {
        padding: 72px 168px;
    }

    @media screen and (max-width: ${props => props.theme.screen.lg}) {
        padding: 72px 96px;
        flex-direction: column ;
        align-items: center;
        h2,p{
            text-align: center ;
        }
        h2{
            width: 100%;
        }
        &>div{
            width: 100%;
        }
        &>img{
            width: 100%;
        }
    }

    @media screen and (max-width: ${props => props.theme.screen.md}) {
        padding: 72px 72px;
    }

    @media screen and (max-width: ${props => props.theme.screen.sm}) {
        padding: 56px 56px;

    }

    @media screen and (max-width: ${props => props.theme.screen.xs}) {
        padding: 56px 48px;

    }
`