import styled, {withTheme} from 'styled-components'

import { useState } from 'react'


const OverflowContainer = styled.div`
    height: 56px;
    overflow: visible;
    position: relative;
    width: 240px;
    z-index: 25;
    @media screen and (max-width: ${props => props.theme.screen.xs}){
        flex-grow: 2;
        max-width: 80%;
        width: 100%;
        &>*{
            justify-content: center;
        }
    }
    
`

export const DropdownContainer = styled.div`
    min-height: 56px;
    max-height: ${props => props.dropdown ? '320px' : '0'};
    margin: 0 0 0 32px;
    background: #f7f8f8;
    transition: 700ms ease-in-out;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: ${props => props.dropdown ? '3px 4px 8px rgba(0, 0, 0, 0.13)' : 'none'};
    color: ${props => props.theme.color.secondary};
    cursor: pointer;
    &>span{
        margin: 16px 0;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        height: 1px;
        display: block;
        background: #93a1b5;
    }
    @media screen and (max-width: 1440px){
        margin: 0 16px !important;
    }
    @media screen and (max-width: ${props => props.theme.screen.xs}){
        margin: 0 !important;
    }
    
`

export const ActiveURL = styled.div`
    
    display: flex;

    height: 56px;
    align-items: center;
    transition: 300ms ease-in-out;
    &:hover{
        background: #e6e7e7;
    }
    p{
        font-weight: 500;
        margin: 0;
        &:first-of-type{
            opacity: 0.75;
            margin: 0 0 6px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            svg{
                transform: ${props => props.dropdown ? 'rotate(180deg)' : 'rotate(0deg)'};
                transition: 300ms ease-in-out;
            }
           
        }
        &:last-of-type{
            font-size: 12px;
            color: ${props => props.theme.color.secondaryOpaque};
        }
    }
   
    box-sizing: border-box;
    
`

export const URLItem = styled.div`
    padding: 8px 16px;
    transition: 300ms ease-in-out;
    width: 100%;
    &:hover{
        background: #e6e7e7;
    }
    p{
        font-weight: 500;
        margin: 0;
        font-size: 16px;
        
    }
    
`



const URLDropdown = (props) => {

    const [dropdown, setDropdown] = useState(false)
    const [activeURL, setActiveURL] = useState("Homepage")

    return (
        <OverflowContainer>
            <DropdownContainer theme={props.theme} dropdown={dropdown}>
                <ActiveURL onClick={() => setDropdown(!dropdown)} dropdown={dropdown}>
                    <URLItem>
                        <p>
                            {activeURL}
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="16" height="16" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="none" stroke="#93a1b5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 9l8 8l8-8"/>
                            </svg>
                            
                        </p>
                        
                        <p>https://page.com</p>
                    </URLItem>
                </ActiveURL>
                <span></span>
                {
                    ["Mint", "About", "Privacy Policy", "Terms of Service"].map((item, index) => {
                        if(item !== activeURL){
                            return (
                                <URLItem key={index} onClick={() => { setActiveURL(item); setDropdown(false)}}>
                                    <p>{item}</p>
                                    <p></p>
                                </URLItem>
                            )
                        }
                        return null
                        
                    } )
                }
            </DropdownContainer>
  
        </OverflowContainer>
    )
}

export default withTheme(URLDropdown)
