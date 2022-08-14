import styled, {withTheme} from 'styled-components'

import Logo from '../../logo/logo'
import MainButton from '../../button/button'
import { useState } from 'react'


const OverflowContainer = styled.div`
    height: 56px;
    overflow: visible;
    
`

export const DropdownContainer = styled.div`
    min-height: 56px;
    max-height: ${props => props.dropdown ? '920px' : '0'};
    margin: 0 0 0 32px;
    background: #f7f8f8;
    transition: 700ms ease-in-out;
    border-radius: 8px;
    overflow: hidden;
    
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
`

export const ActiveURL = styled.div`
    
    display: flex;

    height: 56px;
    align-items: center;
    transition: 300ms ease-in-out;
    &:hover{
        background: #e6e7e7;
    }
   
    box-sizing: border-box;
    
`

export const URLItem = styled.div`
    padding: 8px 16px;
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
            column-gap: 72px;
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
    
`



const URLDropdown = (props) => {

    const [dropdown, setDropdown] = useState(false)

    return (
        <OverflowContainer>
            <DropdownContainer theme={props.theme} dropdown={dropdown}>
                <ActiveURL onClick={() => setDropdown(!dropdown)}>
                    <URLItem dropdown={dropdown}>
                        <p>
                            Homepage
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="16" height="16" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="none" stroke="#93a1b5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 9l8 8l8-8"/>
                            </svg>
                            
                        </p>
                        
                        <p>https://page.com</p>
                    </URLItem>
                </ActiveURL>
                <span></span>
                <URLItem>
                    <p>Mint</p>
                    <p></p>
                </URLItem>
            </DropdownContainer>
  
        </OverflowContainer>
    )
}

export default withTheme(URLDropdown)
