
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { withTheme } from 'styled-components';
import { selectActiveUser } from '../../../redux/user/userReducer';
import MainButton from '../../button/button';
import Example from '../../example/example';
import RenderIf from '../../renderIf/renderIf';

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
            text-align: center;

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
                @media screen and (max-width: ${props => props.theme.screen.sm}) {
                    width: 100%;
                    
                    a{
                        padding: 18px;
                        box-sizing: border-box;
                        width: 100%;
                        justify-content: center;
                    }
                }
            }
            a{
                color: ${props => props.theme.color.primary};
                opacity: 1;
                font-weight: 600;
            }
        }
     
      
    }
    &>div:nth-of-type(2){
        &>h2{
            font-size: 32px;
            margin: 0 0 12px;
        }
        &>p{
            max-width: 280px;
            width: 100%;
            color: ${props => props.theme.color.secondaryOpaque};
            line-height: 24px;
            margin: 0 0 56px;
        }
    }
    @media screen and (max-width: ${props => props.theme.screen.md}) {
        padding-top: 72px
    }

`

const Examples = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 16px;
    row-gap: 32px;
`


const GetStarted = (props) => {

    const user = useSelector(selectActiveUser)

    return(
        <SectionContainer theme={props.theme}>
            
        
           
            <RenderIf isTrue={user && !user.templateDetails}>
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
            </RenderIf>
            <RenderIf isTrue={user && user.templateDetails}>
                <div>
                    <h1>Website In Progress</h1>
                    <p>Continue editing your first minting page!</p>
                    <MainButton>
                        <Link to="/edit?builder">
                            Continue Editing
                        </Link>
                    </MainButton>
                    <p>
                        Want to know more? View our <Link to="#">guide</Link>
                    </p>
                </div>
            </RenderIf>
                
            
        </SectionContainer>
    )
}

export default withTheme(GetStarted);