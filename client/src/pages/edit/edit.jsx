import EditStart from "../../components/editStart/editStart";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { selectActiveUser } from "../../redux/user/userReducer";
import WebsiteBuilder from './builder';


const EditPage = () => {

    const userTemplateDetails = useSelector(selectActiveUser)?.templateDetails

    useEffect(() => {
        console.log(userTemplateDetails)
        return () => {
            console.log("Cleanup")
        }
    }, [])

    return(
        <>  
            {
                userTemplateDetails
                ?
                <WebsiteBuilder />
                :
                <EditStart />
            }
      
        </>
    )
}


export default EditPage;