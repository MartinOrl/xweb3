import { useNavigate } from "react-router-dom";
import { withTheme } from "styled-components";
import MainButton from "../button/button";
import Footer from "../footer/footer";
import Header from "../header/header";
import { Buttons, Container, StartForm } from "./editStartStyles";

import exampleImg from '../../assets/example.webp';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { UserActions } from './../../redux/user/userReducer';


const WebsiteEntryform = (props) => {

    const [sitename, setSitename] = useState("")
    const [domain, setDomain] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formDataObj = Object.fromEntries(formData)
        setSitename("")
        setDomain("")
        dispatch(UserActions.setTemplateDetails(formDataObj))
    }

    const handleTemplateChangeRequest = () => {
        dispatch(UserActions.setTemplateId(false))
        navigate("/dashboard?select=select")
    }

    return(
        <StartForm onSubmit={(e) => handleSubmit(e)} >
            <label htmlFor="sitename">
                Sitename
            </label>
            <input type="text" name="sitename" id="sitename" value={sitename} onChange={(e) => setSitename(e.target.value)}  required minLength={5} placeholder="Name of your site"/>
            <label htmlFor="domain">
                Domain
            </label>
            <input type="text" name="domain" id="domain" value={domain} onChange={(e) => setDomain(e.target.value)} required minLength={5}  placeholder="Domain"/>
            <Buttons theme={props.theme}>
                <MainButton>
                
                    <button type="submit">Start Editing</button>
                    
                </MainButton>
                <p>
                    <span  onClick={ () => handleTemplateChangeRequest() }>
                        Change
                    </span>
                    Template
                </p>
            </Buttons>
        </StartForm>
    )
}



const EditStart = (props) => {

   

    return(
        <>
            <Header />
            <Container theme={props.theme}>
                <div>
                    <h2>Welcome to your website!</h2>
                    <p>We are just a few steps to be ready, please fill the next fields to configurate your website. You can change this information latter on account settings.</p>
                    <WebsiteEntryform />
                </div>
                <img src={exampleImg} alt="example of template" />
            </Container>
            <Footer />
        </>
    )
}

export default withTheme(EditStart);