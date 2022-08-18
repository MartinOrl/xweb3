import EditStart from "../../components/editStart/editStart";
import { useSelector } from 'react-redux';
import { selectActiveUser } from "../../redux/user/userReducer";
import WebsiteBuilder from './builder';
import RenderIf from "../../components/renderIf/renderIf";


const EditPage = () => {

    const userTemplateDetails = useSelector(selectActiveUser)?.templateDetails

    return(
        <>  

            <RenderIf isTrue={userTemplateDetails} > 
                <WebsiteBuilder />
            </RenderIf>

            <RenderIf isTrue={!userTemplateDetails} >
                <EditStart />
            </RenderIf>
      
        </>
    )
}


export default EditPage;