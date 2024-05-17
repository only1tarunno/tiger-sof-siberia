import Container from "../Shared/Container";
import MiddleFooter from "./MiddleFooter";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-[#232F3E] py-8">
      <Container>
        <SocialIcon />
        <hr className="bg-[#0000002f] border-none h-[2px] mt-10 mb-5" />
        <MiddleFooter />
      </Container>
    </footer>
  );
};

export default Footer;
