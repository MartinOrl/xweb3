import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.p`
    
    &>*{
        font-size: 24px;
        font-weight: 500;
        padding: 16px 96px;
        border-radius: 8px ;
        background-color: ${props => props.theme.color.primary};
        color: #fff !important;
        width: max-content ;
        outline:none ;
        text-decoration: none ;
        transition: 300ms ease-in-out;
        display: flex;
        align-items: center;
        column-gap: 16px;
        cursor: pointer;
        &:hover{
            background: ${props => props.theme.color.primaryHover} ;
        }
        a{
            color: #fff !important;
        }
    }

`