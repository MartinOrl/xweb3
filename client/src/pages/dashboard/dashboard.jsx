
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { PageContainer } from './dashboardStyles';
import { useLocation, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import GetStarted from '../../components/templateSelection/getStarted/getStarted';
import { lazy } from 'react';
import { selectActiveUser } from './../../redux/user/userSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from '../../redux/user/userReducer';

const SelectTemplate = lazy(() => import('../../components/templateSelection/select/selectTemplate'));


const Dashboard = () => {

    const [templateSelectionState, setTemplateSelectionState] = useState(false);

    const params = useLocation()
    const dispatch = useDispatch()
    const user = useSelector(selectActiveUser)

    useEffect(() => {
        if(user.templateID){
            console.log("Template has been selected")
        }
    },[])

    useEffect(() => {
        let selectionValue = params.search.replace("?","").split("&")[0].split('=')[1];
        setTemplateSelectionState(selectionValue);
    }, [params.search])

    return(
        <div>
            <Header />
            <PageContainer>
                <p onClick={() => dispatch(UserActions.setCurrentUser(false))} >Log Out</p>
                
          
                {
                    templateSelectionState === "start" || !templateSelectionState
                    ?
                    <GetStarted />
                    :
                    templateSelectionState === "select"
                    ?
                    <SelectTemplate />
                    :
                    null
                }
               
            </PageContainer>
            <Footer />
        </div>
    )
}




export default Dashboard