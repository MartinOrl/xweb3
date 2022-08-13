
import { withTheme } from 'styled-components';
import { Buttons, CardContainer, Tags } from './templateCardStyles';

import cardImg from '../../assets/cardImg.png';
import MainButton from '../button/button';
import { Link } from 'react-router-dom';

const TemplateCard = (props) => {
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
                    <Link to="/dashboard">
                        Select
                    </Link>
                </MainButton>
                <Link to="/preview">
                    Preview
                </Link>
            </Buttons>
        </CardContainer>
    )
}

export default withTheme(TemplateCard);