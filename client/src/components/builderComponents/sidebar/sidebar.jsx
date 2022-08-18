
import { useState } from 'react';
import { withTheme } from 'styled-components';
import ModelOption from '../modeOption/modeOption';
import { SidebarContainer, Modes, OverflowContainer, ContentWrapper } from './sidebarStyles';
import RenderIf from './../../renderIf/renderIf';
import SidebarTemplates from './sidebarTemplates/sidebarTemplates';
import SidebarElements from './sidebarElements/sidebarElements';


const BuilderSidebar = () => {

    const [ mode , setMode ] = useState("create")
    const [category, setCategory] = useState(false)

    return(
        <SidebarContainer>
            <Modes>
                <ModelOption active={mode === "create" ? 1 : 0} action={() => setMode("create")}>
                    Create
                </ModelOption>
                <ModelOption active={mode === "edit" ? 1 : 0} action={() => setMode("edit")}>
                    Edit
                </ModelOption>
            </Modes>
            <OverflowContainer>
                <ContentWrapper>

                    <RenderIf isTrue={!category || category === "elements"}>
                        <SidebarElements action={setCategory} />
                    </RenderIf>

                    <RenderIf isTrue={!category || category === "templates"}>
                        <SidebarTemplates action={setCategory} />
                    </RenderIf>

                </ContentWrapper>
            </OverflowContainer>
            
        </SidebarContainer>
    )
}

export default withTheme(BuilderSidebar);