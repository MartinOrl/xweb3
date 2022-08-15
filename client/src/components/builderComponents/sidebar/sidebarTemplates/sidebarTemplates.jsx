import { useState, useEffect } from 'react'
import styled, {withTheme} from 'styled-components'


const ComponentContainer = styled.div`
    margin-top: 48px;
    h1{
        font-size: 20px;
        font-weight: 500;
        margin: 0 0 24px;
        color: ${props => props.active ? props.theme.color.secondaryOpaque : props.theme.color.secondary};
        cursor: pointer;
        span:last-of-type{
            color: ${props => props.theme.color.secondary};
        }
           
    }
    &>div{
        display: flex;
        flex-direction: column;
        row-gap: 16px;
       
    }
    @media screen and (max-width: 1440px){
        &>div{
            flex-direction: row;
            column-gap: 24px;
            &>div{
                min-width: 196px;
            }
        }
    }
`

const SidebarOption = styled.div`
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 21px 0;
    box-sizing: border-box;
    transition: 300ms ease-in-out;
    color: #5B5A73;
    font-weight: 500;
    cursor: pointer;
    svg{
        margin: 0 0 12px;
        width: 24px;
        height: 24px;
        color: #93A1B5;
    }
    background: #F7F8FB ;
    &:hover{
        background: #e6e7e7;
    }
`   

const SidebarTemplates = (props) => {

    const [ activeOption, setActiveOption ] = useState(false)

    useEffect(() => {
        if(activeOption){
            props.action("templates")
        }
        else{
            props.action(false)
        }
        return () =>{
            console.log("Cleanup")
        }
    }, [activeOption,props])

    return (
        <ComponentContainer active={activeOption} theme={props.theme}>
            <h1>
                <span onClick={() => setActiveOption(false)} >Templates</span>
                <span>{activeOption ? ` / ${activeOption}` : ''}</span>
            </h1>
            <div>
                <SidebarOption onClick={() => activeOption === "Banners" ? setActiveOption(false) : setActiveOption("Banners")} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M440 168V88H72v80h64v-48h88v280h-56v32h176v-32h-56V120h88v48h64z"/>
                    </svg>
                    Banners
                </SidebarOption>
                <SidebarOption onClick={() => activeOption === "Containers" ? setActiveOption(false) : setActiveOption("Containers")} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Zm3 15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3Z"/></svg>
                    Containers
                </SidebarOption>
                <SidebarOption onClick={() => activeOption === "Grid" ? setActiveOption(false) : setActiveOption("Grid")} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z"/></svg>
                    Grid
                </SidebarOption>
            </div>
        </ComponentContainer>
    )
}

export default withTheme(SidebarTemplates);