
import { Link } from 'react-router-dom';
import { FooterContainer, FooterColumn, Socials } from './footerStyles';
import { withTheme } from 'styled-components';
import Logo from '../logo/logo';

const Footer = (props) => {

    return(
        <FooterContainer theme={props.theme}>
   
            <div>
                <Logo link={"/"}  />
                <p>Build your very own NFT page with just a couple of clicks</p>
                <p>© XWEB3 2022, All Rights Reserved</p>
            </div>
           
            <div>
                <FooterColumn>
                    <h2>Sitemap</h2>
                    <Link to="#">Dashboard</Link>
                    <Link to="#">Templates</Link>
                    <Link to="#">Analytics</Link>
                    <Link to="#">Collection</Link>
                </FooterColumn>
                <FooterColumn>
                    <h2>Company</h2>
                    <Link to="#">About Us</Link>
                    <Link to="#">Pricing</Link>
                    <Link to="#">Support</Link>
                    <Link to="#">Guide</Link>
                </FooterColumn>
                <FooterColumn>
                    <h2>Legal</h2>
                    <Link to="#">Terms of Service</Link>
                    <Link to="#">Privacy Policy</Link>
                </FooterColumn>
            </div>
            <Socials>
                <FooterColumn>
                    <h2>Social</h2>
                    <a href="/" title="Follow us on Instagram!">
                        <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="#272646" fillRule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z" clipRule="evenodd"/>
                        </svg>
                        Instagram
                    </a>
                    <a href="/" title="Follow us on Twitter!">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="#272646" d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"/>
                        </svg>
                        Twitter
                    </a>
                    <a href="/" title="Join our Discord!">
                    <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                    ><path fill="#272646" d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0a12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055a20.03 20.03 0 0 0 5.993 2.98a.078.078 0 0 0 .084-.026a13.83 13.83 0 0 0 1.226-1.963a.074.074 0 0 0-.041-.104a13.201 13.201 0 0 1-1.872-.878a.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-2.981a.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028ZM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38c0-1.312.956-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.956 2.38-2.157 2.38Zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38c0-1.312.955-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.946 2.38-2.157 2.38Z"/>
                    </svg>
                        Instagram
                    </a>
                </FooterColumn>
            </Socials>
        </FooterContainer>
    )
}


export default withTheme(Footer);