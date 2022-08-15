
import { withTheme } from 'styled-components';
import { Buttons, CardContainer, Tags } from './templateCardStyles';

import cardImg from '../../assets/cardImg.webp';
import MainButton from '../button/button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserActions } from '../../redux/user/userReducer';
import { nanoid } from '@reduxjs/toolkit';

const TemplateCard = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleTemplateSelection = () => {
        dispatch(UserActions.setTemplateId(nanoid()))
        navigate("/edit")
    }

    return(
        <CardContainer theme={props.theme}>
            <img src={cardImg} alt="template" />
            <h2>Template Name</h2>
            <Tags theme={props.theme}>
                <p>Tag</p>
                <p>Tag</p>
                <p>Tag</p>
            </Tags>
            <Buttons>
                <MainButton >
                    <span onClick={() => handleTemplateSelection()} >
                        Select
                    </span>
                </MainButton>
                <Link to="/preview">
                    Preview
                </Link>
            </Buttons>
        </CardContainer>
    )
}

export default withTheme(TemplateCard);