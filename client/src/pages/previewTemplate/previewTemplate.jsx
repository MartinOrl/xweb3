
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';

import MainButton from '../../components/button/button';
import Logo from './../../components/logo/logo';
import template from '../../assets/template.webp';
import { useState } from 'react';
import Modal from '../../components/modal/modal';
import RenderIf from './../../components/renderIf/renderIf';
import { useEffect } from 'react';


const PreviewHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 192px;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 48px;
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
        justify-content: center;

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
    &>div{
        width: 100%;
        overflow-x: scroll;
        padding-bottom: 16px;
        &::-webkit-scrollbar{
            background: #D9D9D9;
            height: 6px;
            border-radius: 8px;
            cursor: pointer;
        }
        &::-webkit-scrollbar-thumb{
            background: ${props => props.theme.color.primary};
            border-radius: 8px;
            
        }
       
        &>div{
            width: max-content;
            display: flex;
            column-gap: 48px;
            @media screen and (max-width: ${props => props.theme.screen.md}){
                column-gap: 24px;
            }
        }
    }

    @media screen and (max-width: ${props => props.theme.screen.xl}) {
        padding: 56px 168px;
    }

    @media screen and (max-width: ${props => props.theme.screen.lg}) {
        padding: 56px 96px;
    }

    @media screen and (max-width: ${props => props.theme.screen.md}) {
        padding: 48px 72px;
    }

    @media screen and (max-width: ${props => props.theme.screen.sm}) {
        padding: 48px 56px;
   

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

const SelectableTemplate = styled.img`
        height: 144px;
        width: 244px;
        border:  3px solid ${props => props.active ? props.theme.color.primary : 'transparent'};
        box-sizing: border-box;
        border-radius: 8px;
        cursor: pointer;
        object-fit: cover;
        object-position: top;
        transition: 0.3s ease-in-out;
`


const PreviewTemplate = (props) => {

    const [ modalShow, setModalShow ] = useState(false);
    const [advance, setAdvance] = useState(false);

    const [activeTemplate, setActiveTemplate] = useState(0);

    useEffect(() => {
        setAdvance(false)
    }, [modalShow])

    return(
        <>
            <PreviewHeader>
                <Logo link={"/dashboard"} />
                <MainButton>
                    <span onClick={() => setModalShow(true)}>
                        Use Template
                    </span>
                </MainButton>
            </PreviewHeader>
            <Templates theme={props.theme}>
                <h2>Available Templates</h2>
                <div>
                    <div>
             
                        {
                             Array(10).fill(0).map((_, index) => {
                                return (
                                    <SelectableTemplate src={template} key={index} active={activeTemplate === index} onClick={() => setActiveTemplate(index)} />
                                )
                            })
                            
                            
                        }
                    </div>
                </div>
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