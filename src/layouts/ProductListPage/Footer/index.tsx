import LeftFooter from './LeftFooter';
import RightFooter from './RightFooter';

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-container">
          <LeftFooter />
          <RightFooter />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
