import { connect } from 'react-redux';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { LogOutUser, SetCurrentUser } from '../../redux/user/userActions';
import { PageContainer } from './dashboardStyles';
import { useLocation, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import GetStarted from '../../components/templateSelection/getStarted/getStarted';
import { lazy } from 'react';
import { createStructuredSelector } from 'reselect';
import { selectActiveUser } from './../../redux/user/userSelectors';

const SelectTemplate = lazy(() => import('../../components/templateSelection/select/selectTemplate'));


const Dashboard = ({user,setUser,logOut}) => {

    const [templateSelectionState, setTemplateSelectionState] = useState(false);

    const params = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(user)
        if(user.templateID){
            console.log("Template has been selected")
        }
    },[])

    useEffect(() => {
        let selectionValue = params.search.replace("?","").split("&")[0].split('=')[1];
        console.log(selectionValue)
        setTemplateSelectionState(selectionValue);
    }, [params.search])

    return(
        <div>
            <Header />
            <PageContainer>
                <p onClick={() => logOut()} >Log Out</p>
                
          
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

const mapStateToProps = createStructuredSelector({
    user: selectActiveUser
})

const mapDispatchToProps = dispatch => ({
    setUser: (user) => dispatch(SetCurrentUser(user)),
    logOut: () => dispatch(LogOutUser())
})



export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)