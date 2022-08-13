
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { withTheme } from 'styled-components';
import MainButton from '../../button/button';
import Example from '../../example/example';

const SectionContainer = styled.div`
    padding-top: 136px;
    color: ${props => props.theme.color.secondary};
    &>div:first-of-type{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 188px;
        h1{
            margin: 0 0 12px;
            font-size: 56px ;

        }
        p{
            color: ${props => props.theme.color.secondaryOpaque};
            line-height: 24px;
            text-align: center;
            margin: 0;
            &:first-of-type{
                width: 255px;
                margin: 0 0 48px;
       
            }
            &:nth-of-type(2){
                
            
                margin: 0 0 16px;
                opacity: 1;
                a{
                    padding: 18px 72px;
                    font-size: 20px !important;
                }
            }
            a{
                color: ${props => props.theme.color.primary};
                opacity: 1;
                font-weight: 600;
            }
        }
     
      
    }
    &>div:last-of-type{
        &>h2{
            font-size: 32px;
            margin: 0 0 12px;
        }
        &>p{
            width: 280px;
            color: ${props => props.theme.color.secondaryOpaque};
            line-height: 24px;
            margin: 0 0 56px;
        }
    }

`

const Examples = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 16px;
`


const GetStarted = (props) => {
    return(
        <SectionContainer theme={props.theme}>
            <div>
                <h1>Let's Get Started</h1>
                <p>Get started by creating your first minting page!</p>
                <MainButton>
                    <Link to="/dashboard?select=select">
                        Create Minting Page
                    </Link>
                </MainButton>
                <p>
                    Want to know more? View our <Link to="#">guide</Link>
                </p>
            </div>
            <div>
                <h2>Examples</h2>
                <p>Want to see websites created with XWeb3? See for yourself</p>
                <Examples>
                    <Example />
                    <Example />
                </Examples>
            </div>
        </SectionContainer>
    )
}

export default withTheme(GetStarted);