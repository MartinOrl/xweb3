import { Link } from 'react-router-dom'
import styled from 'styled-components'

import exampleImg from '../../assets/example.png'
import MainButton from '../button/button'

const ExampleContainer = styled.div`
    width: 48%;
    min-width: 420px;
    aspect-ratio: 16/9;
    height: auto;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    flex-grow: 2;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
    &:hover{
        div{
            opacity: 1;
        }
    }
    div{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: 300ms ease-in-out;
        p{
           
            &>*{
                font-size: 16px;
                padding: 16px 32px;
            }
        }
    }
    @media screen and (max-width: ${props => props.theme.screen.sm}){
        min-width: 100%;
    
    }

`

export default function Example(){
    return(
        <ExampleContainer>
            <img src={exampleImg} alt="template example" />
            <div>
                <MainButton>
                    <Link to="/preview">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                            <path fill="white" d="M396 512a112 112 0 1 0 224 0a112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176s176 78.8 176 176s-78.8 176-176 176z"/>
                        </svg>
                        Preview
                    </Link>
                </MainButton>
            </div>
        </ExampleContainer>
    )
}