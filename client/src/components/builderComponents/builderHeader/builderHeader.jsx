import styled, {withTheme} from 'styled-components'

import Logo from '../../logo/logo'
import MainButton from '../../button/button'
import UrlDropdown from '../urlDropdown/urlDropdown'
import CollectionDropdown from '../collectionDropdown/collectionDropdown'

const Header = styled.header`
    padding: 18px 24px;
    box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.13);
    background: #fff ;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    z-index: 25;

    &, a{
        color: ${props => props.theme.color.secondary};
    }
    &>div{
        display: flex;
        align-items: center;
        &:last-of-type{
            flex-grow: 1;
            display: flex;
            align-items: center;
            &>div{
                display: flex;
                align-items: center;
                &:last-of-type{
                    margin-left: auto;
                }
            }
            p{
                span{
                    font-size: 16px;
                    padding: 18px 72px;
                }
            }
        }
       
    }
    @media screen and (max-width: 1440px){
        flex-direction: column;
        row-gap: 32px;
        &>div{
            width: 100%;
            justify-content: center;
            &:last-of-type{
             
                &>div{
                
                    &:last-of-type{
                        margin-left:  48px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: ${props => props.theme.screen.md}){
        &>div{
            &:last-of-type{
                flex-direction: column;
                row-gap: 32px;
                &>div:last-of-type{
                    margin-left: 0;
                }
            }
        }
    }
    @media screen and (max-width: ${props => props.theme.screen.xs}){
        &>div{
            flex-wrap: wrap;
            justify-content: space-evenly;
            row-gap: 16px;
            &:last-of-type{
                &>div:first-of-type{
              
                    row-gap: 16px;
                    column-gap: 32px;
                    justify-content: center;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    
                }
                &>div:last-of-type{
                    flex-direction: column;
                    width: 80%;
                    &>div{
                        margin-right: 0;
                        max-width: unset;
                    }
                    &>p{
                        width: 100%;
                        &>*{
                            padding: 18px;
                            width: 100%;
                            justify-content: center;
                            box-sizing: border-box;
                        } 
                    }
                }
            }
        }
    }
`

const ToolButton = styled.div`
    svg{
        transition: 300ms ease-in-out;
    }
    &>*{
        display: flex;
        align-items: center;
        height: 56px;
        padding: 0 16px;
        border-radius: 8px;
        background: #f7f8f8;
        margin: 0 0 0 32px;
        transition: 300ms ease-in-out;
        cursor: pointer;
        &:hover{
            background: #e6e7e7;
        }
        
        a{
            display: flex;
            align-items: center;
            svg{
                margin-right: 16px;
                font-weight: 500;
                
            }
        }
        @media screen and (max-width: 1440px){
            margin: 0 16px !important;
        }
        @media screen and (max-width: ${props => props.theme.screen.xs}){
            margin: 0 !important;
        }
        
    }
 
    @media screen and (max-width: ${props => props.theme.screen.xs}){
        flex-grow: 2;
        max-width: 80%;
        
        &>*{
            justify-content: center;
        }
    }
    
`

const PreviewButton = styled(ToolButton)`
    svg{
        margin-right: 12px;
        display: block;
    }
    span{
        background: ${props => props.active ? props.theme.color.dark : '#f7f8f8'} !important;
        color: ${props => props.active ? '#fff' : props.theme.color.secondary} !important;
        svg path{
            fill: ${props => props.active ? '#fff' : props.theme.color.secondary} !important;
        }
        &:hover{
            background: ${props => props.active ? props.theme.color.dark : '#f7f8f8'} !important;
        }
    }
`


const BuilderHeader = (props) => {
    return (
        <Header theme={props.theme}>
            <Logo link={"/dashboard"} />
            <div>
                
                <ToolButton>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="none" stroke="#93a1b5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 4l-8 8l8 8"/>
                    </svg>
                </ToolButton>
                <UrlDropdown />
                <PreviewButton active={props.preview} theme={props.theme} >
                    <span onClick={() => props.previewAction(!props.preview)}>
                        <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                            <path fill="#93a1b5" d="M396 512a112 112 0 1 0 224 0a112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176s176 78.8 176 176s-78.8 176-176 176z"/>
                        </svg>
                        Preview
                    </span>
                </PreviewButton>
            </div>
            <div>
                <div>
                    <ToolButton onClick={() => props.deviceAction("desktop")}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 28 28">
                            <path fill={props.device === "desktop" ? props.theme.color.primary : '#93a1b5' } d="M4 8.25A2.25 2.25 0 0 1 6.25 6h15.5A2.25 2.25 0 0 1 24 8.25v9a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 17.25v-9ZM2.75 20.5a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5H2.75Z"/>
                        </svg>
                    </ToolButton>
                    <ToolButton onClick={() => props.deviceAction("tablet")}>
                        <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                            <path fill={props.device === "tablet" ? props.theme.color.primary : '#93a1b5' } d="M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z"/>
                        </svg>
                    </ToolButton>
                    <ToolButton onClick={() => props.deviceAction("phoneVertical")}>
                        <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                            <path fill={props.device === "phoneVertical" ? props.theme.color.primary : '#93a1b5' } d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0a1 1 0 0 0 2 0z"/>
                        </svg>
                    </ToolButton>
                    <ToolButton onClick={() => props.deviceAction("phoneHorizontal")}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                            <path fill={props.device === "phoneHorizontal" ? props.theme.color.primary : '#93a1b5' } d="M2 12.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2zm11-6a1 1 0 1 0 0 2a1 1 0 0 0 0-2z"/>
                        </svg>
                    </ToolButton>
                </div>
                <div>
                    <CollectionDropdown />
                    <MainButton>
                        <span>
                            Publish
                        </span>
                    </MainButton>
                </div>
            </div>
            
            
        </Header>
    )
}

export default withTheme(BuilderHeader)
