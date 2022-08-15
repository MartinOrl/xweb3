import styled from "styled-components";

export const SidebarContainer = styled.div`
    max-width: 408px;
    width: 100%;
    height: auto;
    background: #fff;
    box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.12);
    padding: 48px 48px 56px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    left: 0;
    @media screen and (max-width: 1440px){
        max-width: unset;
    }
`

export const Modes = styled.div`
    display: flex;
    background: #F7F8FB;
    width: max-content;
    
    p{
        
        &:nth-of-type(2){
            margin-left: -8px;
            padding-left: 40px;
        }
    }
`

export const OverflowContainer = styled.div`
    @media screen and (max-width: 1440px){
        overflow-x: scroll;
        width: 100%;
        padding-bottom: 16px;
    }
    &::-webkit-scrollbar{
            background: #D9D9D9;
            height: 6px;
            border-radius: 8px;
            cursor: pointer;
    }
    &::-webkit-scrollbar-thumb{
        background: ${props => props.theme.color.primary};
        border-radius: 8px;
        
    }
`

export const ContentWrapper = styled.div`
    @media screen and (max-width: 1440px){
        display: flex;
        flex-wrap: nowrap;
        width: max-content;
        column-gap: 72px;
        
    }
`