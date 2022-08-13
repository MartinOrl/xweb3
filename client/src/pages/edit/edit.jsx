import EditStart from "../../components/editStart/editStart";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';


const EditPage = () => {

    const [hasBeenBuilt, setHasBeenBuilt] = useState(false);

    const params = useLocation()

    useEffect(() => {
        let editState = params.search.replace("?","")
        setHasBeenBuilt(editState ? true : false)
    })

    return(
        <div>
            <EditStart />
        </div>
    )
}


export default EditPage;