import styled, {withTheme} from 'styled-components'

import { useState } from 'react'


const OverflowContainer = styled.div`
    height: 56px;
    overflow: visible;
    margin-right: 32px;
    width: 100%;
    max-width: 240px;
    min-width: 200px;
    position: relative;
    z-index: 26;
`

export const DropdownContainer = styled.div`
    min-height: 56px;
    width: 100%;
    max-height: ${props => props.dropdown ? '920px' : '0'};
    
    transition: 700ms ease-in-out;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
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
`

export const ActiveURL = styled.div`

    display: flex;
    
    height: 56px;
    align-items: center;
    transition: 300ms ease-in-out;
   
    border-bottom: 2px solid ${props => props.theme.color.primary};
    box-sizing: border-box;
    
`

export const URLItem = styled.div`
    padding: 8px 16px;
    transition: 300ms ease-in-out;
    width: 100%;
    p{
        font-weight: 500;
        margin: 0;
        &:first-of-type{
            opacity: 0.75;
      
            display: flex;
            align-items: center;
            
            justify-content: space-between;
            svg{
                transform: ${props => props.dropdown ? 'rotate(180deg)' : 'rotate(0deg)'};
                transition: 300ms ease-in-out;
            }
           
        }
       
    }
    
`



const CollectionDropdown = (props) => {

    const [dropdown, setDropdown] = useState(false)
    const [activeCollection, setActiveCollection] = useState("Testnet Rinkeby")

    return (
        <OverflowContainer>
            <DropdownContainer theme={props.theme} dropdown={dropdown}>
                <ActiveURL onClick={() => setDropdown(!dropdown)} theme={props.theme}>
                    <URLItem dropdown={dropdown}>
                        <p>
                            {activeCollection}
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="16" height="16" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="none" stroke="#93a1b5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 9l8 8l8-8"/>
                            </svg>
                            
                        </p>
               
                    </URLItem>
                </ActiveURL>
                <span></span>
                {
                    ["Testnet Rinkeby", "Mainnet", "Ropsten", "Kovan", "Rinkeby"].map((item, index) => {
                        if(item !== activeCollection){
                            return (
                                <URLItem key={index} onClick={() => { setActiveCollection(item); setDropdown(false) }}>
                                    <p>{item}</p>
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

export default withTheme(CollectionDropdown)
