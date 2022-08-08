import { CustomLink } from "./buttonStyles"

const MainButton = ({text,action}) => {
    return(
        <CustomLink onClick={() => action()}>
            {
                text
            }
        </CustomLink>
    )
}

export default MainButton