import styled from 'styled-components'

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 24px;
    row-gap: 16px;
    margin-bottom: 32px;
    p{
        padding: 8px 24px;
        box-sizing: border-box;
        background: #fff;
        border-radius: 8px;
        margin: 0;
        box-shadow: ${props => props.theme.shadow.card};
    }
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    p:first-of-type{
        &>*{
            font-size: 16px;
            line-height: 24px;
            font-weight: 500;
            padding: 12px 48px;
        }
    }
    &>a{
        color: ${props => props.theme.color.primary};
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        margin-left: 32px;
    }
`

export const CardContainer = styled.div`
    padding: 24px;
    box-sizing: border-box;
    width: 24%;
    min-width: 300px;
    max-width: 360px;
    border-radius: 8px;
    color: ${props => props.theme.color.secondary};
    box-shadow: ${props => props.theme.shadow.card};
    img{
        width: 100%;
        height: auto;
    }
    h2{
        margin: 24px 0;
        font-size: 24px;
        font-weight: 600
    }
`