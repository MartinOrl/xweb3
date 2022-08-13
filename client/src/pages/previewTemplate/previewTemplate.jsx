
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';

import MainButton from '../../components/button/button';
import Logo from './../../components/logo/logo';
import template from '../../assets/template.png';
import { useState } from 'react';
import Modal from '../../components/modal/modal';
import RenderIf from './../../components/renderIf/renderIf';
import { useEffect } from 'react';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 192px;

    span{
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        padding: 18px 72px;
    }
    p{
        margin: 0;
    }
    @media screen and (max-width: ${props => props.theme.screen.xl}) {
        padding: 32px 168px;
    }

    @media screen and (max-width: ${props => props.theme.screen.lg}) {
        padding: 32px 96px;
    }

    @media screen and (max-width: ${props => props.theme.screen.md}) {
        padding: 32px 72px;
    }

    @media screen and (max-width: ${props => props.theme.screen.sm}) {
        padding: 32px 56px;
    }

    @media screen and (max-width: ${props => props.theme.screen.xs}) {
        padding: 24px 48px;

    }
`

const Templates = styled.div`
    padding: 56px 192px;
    box-sizing: border-box;
    background: #F6F5F8 ;
    h2{
        font-size: 24px;
        font-weight: 500;
        color: ${props => props.theme.color.secondary};
        margin: 0 0 32px;
    }
    @media screen and (max-width: ${props => props.theme.screen.xl}) {
        padding: 56px 168px;
    }

    @media screen and (max-width: ${props => props.theme.screen.lg}) {
        padding: 56px 96px;
    }

    @media screen and (max-width: ${props => props.theme.screen.md}) {
        margin-top: 128px;
        padding: 48px 72px;
    }

    @media screen and (max-width: ${props => props.theme.screen.sm}) {
        padding: 48px 56px;
        margin-top: 96px ;

    }

    @media screen and (max-width: ${props => props.theme.screen.xs}) {
        padding: 32px 48px;

    }
`

const Template = styled.img`
    width: 100%;
    height: auto;
`

const ModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        margin: 0;
    }
    p>*{
        font-size: 16px;
        padding: 18px 72px;
    }

`


const PreviewTemplate = (props) => {

    const [ modalShow, setModalShow ] = useState(false);
    const [advance, setAdvance] = useState(false);

    useEffect(() => {
        setAdvance(false)
    }, [modalShow])

    return(
        <>
            <Header>
                <Logo link={"/dashboard"} />
                <MainButton>
                    <span onClick={() => setModalShow(true)}>
                        Use Template
                    </span>
                </MainButton>
            </Header>
            <Templates theme={props.theme}>
                <h2>Available Templates</h2>
            </Templates>
            <Template src={template} />
            <Modal active={modalShow} action={() => setModalShow(false)} 
            title={!advance ? "Confirmation" : 'Create a collection'} 
            subText={!advance ? "Are you sure you want to select this template for your website?" : 'Before you can build your website, you need to create a collection, start your deploying and come back later so you can start your website'}
            >
                <ModalContentContainer>
                    <RenderIf isTrue={!advance}>
                        <MainButton>
                            <span onClick={() => setAdvance(true)} >Use Template</span>
                        </MainButton>
                    </RenderIf>
                    <RenderIf isTrue={advance}>
                        <MainButton>
                            <Link to="/edit">
                                Create Collection
                            </Link>
                        </MainButton>
                    </RenderIf>
                </ModalContentContainer>
                

            </Modal>
        </>
    )

}

export default withTheme(PreviewTemplate);