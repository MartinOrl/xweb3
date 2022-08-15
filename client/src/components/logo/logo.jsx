import { Link } from "react-router-dom"
import styled from 'styled-components'

import logo from '../../assets/logo.webp';

const StyledLink = styled(Link)`
    &,&>*{
        height: 56px !important;
        width: 88px !important;
        padding: 0 !important;
        opacity: 1 !important;
    }
`

const Logo = ({link}) => {
    return(
        <StyledLink to={link}>
            <img src={logo} alt="xweb3 logo" />
        </StyledLink>
    )
}

export default Logo;