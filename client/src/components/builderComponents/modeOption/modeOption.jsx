import styled, {withTheme} from 'styled-components'

const Option = styled.p`
    margin: 0;
    padding: 12px 32px;
    box-sizing: border-box;
    color: ${props => props.active ? '#fff' : props.theme.color.secondary};
    background: ${props => props.active ? props.theme.color.primary : 'transparent'};
    border-radius: 8px;
    cursor: pointer;
    transition: 200ms ease-in-out;


`

const ModelOption = ({children,active,theme,action}) => {
    return(
        <Option active={active} theme={theme} onClick={() => action()}>
            {children}
        </Option>
    )
}

export default withTheme(ModelOption);