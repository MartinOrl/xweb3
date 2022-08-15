
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { PageContainer } from './dashboardStyles';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import GetStarted from '../../components/templateSelection/getStarted/getStarted';
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { selectActiveUser } from '../../redux/user/userReducer';
import RenderIf from '../../components/renderIf/renderIf';

const SelectTemplate = lazy(() => import('../../components/templateSelection/select/selectTemplate'));


const Dashboard = () => {

    const [templateSelectionState, setTemplateSelectionState] = useState(false);

    const params = useLocation()
    const user = useSelector(selectActiveUser)

    useEffect(() => {
        if(user?.templateID){
            console.log("Template has been selected")
        }
    })

    useEffect(() => {
        let selectionValue = params.search.replace("?","").split("&")[0].split('=')[1];
        setTemplateSelectionState(selectionValue);
    }, [params.search])

    return(
        <div>
            <Header />
            <PageContainer>
          
                    <RenderIf isTrue={(templateSelectionState === "start" || !templateSelectionState)}>
                        <GetStarted />
                    </RenderIf>
                    <RenderIf isTrue={(templateSelectionState === "select") && !user?.templateID}>
                        <SelectTemplate />
                    </RenderIf>
                   
            
               
            </PageContainer>
            <Footer />
        </div>
    )
}




export default Dashboard