import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomLink = styled.p`
    font-size: 24px;
    font-weight: 500;
    padding: 16px 96px;
    border-radius: 8px ;
    background-color: ${props => props.theme.color.primary};
    color: #fff;
    width: max-content ;
    outline:none ;
    text-decoration: none ;
    transition: 300ms ease-in-out;
    cursor: pointer ;
    &:hover{
        background: ${props => props.theme.color.primaryHover} ;
    }
`