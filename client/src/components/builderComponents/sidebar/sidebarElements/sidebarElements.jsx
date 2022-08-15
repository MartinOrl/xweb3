import { useEffect, useState } from 'react'
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
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
        row-gap: 16px;
        column-gap: 12px;
       
    }
    @media screen and (max-width: 1440px){
        &>div{
            display: flex;
            flex-direction: row;
            column-gap: 24px;
            &>div{
                min-width: 96px;
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

const SidebarElements = (props) => {

    const [ activeOption, setActiveOption ] = useState(false)

    useEffect(() => {
        if(activeOption){
            props.action("elements")
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
                <span onClick={() => setActiveOption(false)} >Elements</span>
                <span>{activeOption ? ` / ${activeOption}` : ''}</span>
            </h1>
            <div>
          
                <SidebarOption onClick={() => activeOption === "Text" ? setActiveOption(false) : setActiveOption("Text")} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M440 168V88H72v80h64v-48h88v280h-56v32h176v-32h-56V120h88v48h64z"/>
                    </svg>
                    Text
                </SidebarOption>
                <SidebarOption onClick={() => activeOption === "Image" ? setActiveOption(false) : setActiveOption("Image")} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z"/>
                                <circle cx="8.5" cy="8.5" r="2.5"/>
                            <path d="M14.526 12.621L6 22h12.133A3.867 3.867 0 0 0 22 18.133V18c0-.466-.175-.645-.49-.99l-4.03-4.395a2 2 0 0 0-2.954.006Z"/>
                        </g>
                    </svg>
                    Image
                </SidebarOption>
                <SidebarOption onClick={() => activeOption === "Button" ? setActiveOption(false) : setActiveOption("Button")} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <g fill="currentColor">
                        <path fillRule="evenodd" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5Z" clipRule="evenodd"/>
                        <path d="m16 12l-6 4.33V7.67L16 12Z"/>
                        </g>
                    </svg>
                    Button
                </SidebarOption>
                <SidebarOption onClick={() => activeOption === "Input" ? setActiveOption(false) : setActiveOption("Input")} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm1 2.5h1.5m1.5 0H6.5m0 0v7m0 0H5m1.5 0H8"/></svg>
                    Input
                </SidebarOption>
                <SidebarOption onClick={() => activeOption === "Actions" ? setActiveOption(false) : setActiveOption("Actions")} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M10.25 2.75h-7.5v10.5h10.5v-3.5"/><path d="m5.75 7.75l2.5 2.5l6-6.5"/></g></svg>
                    Actions
                </SidebarOption>
                <SidebarOption onClick={() => activeOption === "Icons" ? setActiveOption(false) : setActiveOption("Icons")} >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="m231.359 147l-80.921 205h45.155l15.593-39.5h89.628l15.593 39.5h45.155l-80.921-205Zm-3.594 123.5L256 198.967l28.235 71.533Z"/><path fill="currentColor" d="M384 56H128V16H16v112h40v256H16v112h112v-40h256v40h112V384h-40V128h40V16H384ZM48 96V48h48v48Zm48 368H48v-48h48Zm288-40H128v-40H88V128h40V88h256v40h40v256h-40Zm80-8v48h-48v-48ZM416 48h48v48h-48Z"/></svg>
                    Icons
                </SidebarOption>
            </div>
        </ComponentContainer>
    )
}

export default withTheme(SidebarElements);