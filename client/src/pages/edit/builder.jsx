import { useState } from "react";
import BuilderHeader from "../../components/builderComponents/builderHeader/builderHeader";
import BuilderSidebar from '../../components/builderComponents/sidebar/sidebar';
import styled from "styled-components";

const BuilderContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #F8FAFB ;
    &>div:last-of-type{
        display: flex;
        flex-grow: 2;
        width: 100%;
    }
`

const WebsiteBuilder = () => {

    const [ activeDevice, setActiveDevice ] = useState("desktop")

    return (
        <BuilderContainer>

            <BuilderHeader device={activeDevice} deviceAction={setActiveDevice} />
            <div>
                <BuilderSidebar />
            </div>
        </BuilderContainer>
    );
}

export default WebsiteBuilder;