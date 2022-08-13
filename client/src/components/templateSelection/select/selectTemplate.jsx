import styled from 'styled-components'
import { withTheme } from 'styled-components';
import TemplateCard from '../../templateCard/templateCard';

const SelectionContainer = styled.div`
    &>div:first-of-type{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${props => props.theme.color.secondary};
        margin: 64px 0 56px;
        h2{
            font-size: 48px;
            font-weight: 500;
            margin: 0 0 12px;
        }
        p{
            color: ${props => props.theme.color.secondaryOpaque};
            max-width: 80%;
            width: 563px;
            text-align: center;
            margin: 0;
        }

    }
`

const SelectTemplate = (props) => {
    return(
        <SelectionContainer theme={props.theme}>
            <div>
                <h2>Select A Template</h2>
                <p>Connect your wallet, create an account and build your very own NFT website. It's this simple.</p>
            </div>
            <div>
                <TemplateCard />
            </div>
        </SelectionContainer>
    )
}

export default withTheme(SelectTemplate);