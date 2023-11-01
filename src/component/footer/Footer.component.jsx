import {
    FooterContainer,
    FooterCopyright,
    FooterCopyrightContainer,
    FooterCopyrightLink
} from "./footer.style"


const Footer = () => {
    return (
        <FooterContainer>
            <FooterCopyrightContainer>
                <FooterCopyright>&copy; 2023 All Rights Reserverd. This template is made with by &nbsp;
                    <FooterCopyrightLink
                        to="https://anirudh-portfolio-26.netlify.app/"
                        target="_blank">
                        Anirudh
                    </FooterCopyrightLink>
                </FooterCopyright>
            </FooterCopyrightContainer>
        </FooterContainer>
    )
}

export default Footer