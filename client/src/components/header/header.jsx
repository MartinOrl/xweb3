
import { CollapseToggle, HeaderContainer, Collapsible, UserDropdown } from './headerStyles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { withTheme } from 'styled-components';
import RenderIf from '../renderIf/renderIf';
import { useState } from 'react';
import Logo from './../logo/logo';
import { selectActiveUser, UserActions } from './../../redux/user/userReducer';


const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [userMenuDrop, setUserMenuDrop] = useState(false);
    const dispatch = useDispatch()
    const user = useSelector(selectActiveUser)

    return(
        <HeaderContainer>
            <div>
                <Logo link="/dashboard" />
                <CollapseToggle onClick={() => setIsOpen(!isOpen)} theme={props.theme} isOpen={isOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </CollapseToggle>
            </div>
            <Collapsible theme={props.theme} isOpen={isOpen}>
                <div>
                    <Link to='/dashboard'>Dashboard</Link>
                    <span></span>
                    <UserDropdown userMenuDrop={userMenuDrop} >
                        <p>
                            Welcome, {user?.name}
                        </p>
                        <div onClick={() => setUserMenuDrop(!userMenuDrop)}>
                            <RenderIf isTrue={user?.profileImageURL}>
                                <img src={user?.profileImageURL} alt="profile" />
                            </RenderIf>
                            <RenderIf isTrue={!user?.profileImageURL}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0107 37.395C12.0368 35.4255 12.8372 33.5453 14.2388 32.1614C15.6404 30.7775 17.5305 30.001 19.5002 30H28.5002C30.47 30.001 32.3601 30.7775 33.7617 32.1614C35.1633 33.5453 35.9637 35.4255 35.9897 37.395C32.7 40.3595 28.4286 42.0001 24.0002 42.0001C19.5719 42.0001 15.3005 40.3595 12.0107 37.395ZM30.7502 18.75C30.7502 20.085 30.3544 21.3901 29.6127 22.5001C28.871 23.6101 27.8168 24.4753 26.5834 24.9862C25.35 25.4971 23.9928 25.6308 22.6834 25.3703C21.374 25.1099 20.1713 24.467 19.2273 23.523C18.2833 22.579 17.6404 21.3762 17.3799 20.0669C17.1195 18.7575 17.2532 17.4003 17.7641 16.1669C18.2749 14.9335 19.1401 13.8793 20.2501 13.1376C21.3602 12.3959 22.6652 12 24.0002 12C25.7905 12 27.5073 12.7112 28.7732 13.977C30.0391 15.2429 30.7502 16.9598 30.7502 18.75Z" fill="white"/>
                                    <path d="M40.1235 37.395C42.2777 34.8031 43.7759 31.7306 44.4915 28.4372C45.2071 25.1439 45.1189 21.7267 44.2345 18.4746C43.3501 15.2225 41.6954 12.2313 39.4105 9.75398C37.1255 7.27666 34.2775 5.3861 31.1074 4.24224C27.9373 3.09839 24.5383 2.73489 21.1979 3.18249C17.8576 3.63009 14.6742 4.87562 11.9171 6.81372C9.15993 8.75183 6.91012 11.3255 5.35799 14.317C3.80586 17.3085 2.99706 20.6298 3.00001 24C3.00114 28.8992 4.72763 33.6416 7.87651 37.395L7.84651 37.4205C7.95151 37.5465 8.07151 37.6545 8.17951 37.779C8.31451 37.9335 8.46001 38.079 8.59951 38.229C9.01951 38.685 9.45151 39.123 9.90451 39.534C10.0425 39.66 10.185 39.777 10.3245 39.897C10.8045 40.311 11.298 40.704 11.8095 41.07C11.8755 41.115 11.9355 41.1735 12.0015 41.22V41.202C15.5147 43.6742 19.7057 45.001 24.0015 45.001C28.2974 45.001 32.4884 43.6742 36.0015 41.202V41.22C36.0675 41.1735 36.126 41.115 36.1935 41.07C36.7035 40.7025 37.1985 40.311 37.6785 39.897C37.818 39.777 37.9605 39.6585 38.0985 39.534C38.5515 39.1215 38.9835 38.685 39.4035 38.229C39.543 38.079 39.687 37.9335 39.8235 37.779C39.93 37.6545 40.0515 37.5465 40.1565 37.419L40.1235 37.395ZM24 12C25.335 12 26.6401 12.3958 27.7501 13.1375C28.8601 13.8792 29.7253 14.9335 30.2362 16.1669C30.7471 17.4003 30.8808 18.7575 30.6203 20.0668C30.3599 21.3762 29.717 22.5789 28.773 23.5229C27.829 24.4669 26.6262 25.1098 25.3169 25.3703C24.0075 25.6307 22.6503 25.497 21.4169 24.9862C20.1835 24.4753 19.1293 23.6101 18.3876 22.5001C17.6459 21.39 17.25 20.085 17.25 18.75C17.25 16.9598 17.9612 15.2429 19.227 13.977C20.4929 12.7111 22.2098 12 24 12ZM12.0105 37.395C12.0365 35.4254 12.8369 33.5453 14.2385 32.1614C15.6402 30.7774 17.5303 30.001 19.5 30H28.5C30.4697 30.001 32.3599 30.7774 33.7615 32.1614C35.1631 33.5453 35.9635 35.4254 35.9895 37.395C32.6998 40.3595 28.4284 42.0001 24 42.0001C19.5716 42.0001 15.3002 40.3595 12.0105 37.395Z" fill="#63B90C"/>
                                </svg>
                            </RenderIf>
                        </div>
                        <div>
                            <p onClick={() => {
                                dispatch(UserActions.logOutUser())
                                setUserMenuDrop(!userMenuDrop);
                          
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                                    <path fill="#272646" d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1s.5.448.5 1s-.224 1-.5 1z"/>
                                </svg>
                                Log Out
                            </p>
                        </div>
                    </UserDropdown>
                   
                </div>
            </Collapsible>
        </HeaderContainer>
    )
}


export default withTheme(Header);