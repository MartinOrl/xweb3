import { ButtonContainer } from "./buttonStyles"

const MainButton = ({action, children}) => {
    return(
        <ButtonContainer >
            {
                children
            }
        </ButtonContainer>
    )
}

export default MainButton