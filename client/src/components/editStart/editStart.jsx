import { Link } from "react-router-dom";
import { withTheme } from "styled-components";
import MainButton from "../button/button";
import Footer from "../footer/footer";
import Header from "../header/header";
import { Buttons, Container, StartForm } from "./editStartStyles";

import exampleImg from '../../assets/example.png';

const EditStart = (props) => {
    return(
        <div>
            <Header />
            <Container theme={props.theme}>
                <div>
                    <h2>Welcome to your website!</h2>
                    <p>We are just a few steps to be ready, please fill the next fields to configurate your website. You can change this information latter on account settings.</p>
                    <StartForm>
                        <label htmlFor="sitename">
                            Sitename
                        </label>
                        <input type="text" name="sitename" id="sitename"  placeholder="Name of your site"/>
                        <label htmlFor="domain">
                            Domain
                        </label>
                        <input type="text" name="domain" id="domain"  placeholder="Domain"/>
                        <Buttons theme={props.theme}>
                            <MainButton>
                                <Link to="/">
                                    <span>Start Editing</span>
                                </Link>
                            </MainButton>
                            <p>
                                <Link to="/dashboard?select=select">
                                    Change
                                </Link>
                                Template
                            </p>
                        </Buttons>
                    </StartForm>
                    
                </div>
                <img src={exampleImg} alt="example of template" />
            </Container>
            <Footer />
        </div>
    )
}

export default withTheme(EditStart);