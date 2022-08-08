import { ModalContainer, ModalHeading, ModalContent } from "./modalStyles"

const Modal = ({active,action, title,subText, children}) => {
    return(
        <ModalContainer active={active}>
            <ModalContent active={active}>
                <ModalHeading>
                    <h1>{title}</h1>
                    <p>{subText}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" onClick={() => action()}>
                        <path fill="black" d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"/>
                    </svg>
                </ModalHeading>
               
                {children}
              
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal;