import { useState } from "react";
import BuilderHeader from "../../components/builderComponents/builderHeader/builderHeader";
import BuilderSidebar from '../../components/builderComponents/sidebar/sidebar';
import styled from "styled-components";
import RenderIf from './../../components/renderIf/renderIf';
import template from '../../assets/template.png'

const BuilderContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #F8FAFB ;
    &>div:last-of-type{
        display: flex;
        flex-grow: 2;
        width: 100%;
        @media screen and (max-width: 1440px){
            flex-direction: column;
        }
    }
`

const TemplateContainer = styled.div`
    margin: 32px 24px 0 32px;
    flex-grow: 2;
    img{
        width: 100%;
    }
`

const WebsiteBuilder = () => {

    const [ activeDevice, setActiveDevice ] = useState("desktop")
    const [ previewMode, setPreviewMode ] = useState(false)

    return (
        <BuilderContainer>

            <BuilderHeader device={activeDevice} deviceAction={setActiveDevice} preview={previewMode} previewAction={setPreviewMode} />
            <div>
                <RenderIf isTrue={!previewMode} >
                    <BuilderSidebar />
                </RenderIf>
                <TemplateContainer>
                    <img src={template} alt="template preview" />
                </TemplateContainer>
                
            </div>
        </BuilderContainer>
    );
}

export default WebsiteBuilder;