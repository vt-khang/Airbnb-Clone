import { FooterButtonProps } from './type';
import Button from '@/components/Button';

function FooterButton({ icon, iconPosition = 'left', text }: FooterButtonProps) {
  return (
    <Button
      type="text"
      className="footer-btn"
    >
      {iconPosition === 'left' && <span className="footer-icon-l">{icon}</span>}
      <span className="footer-text">{text}</span>
      {iconPosition === 'right' && <span className="footer-icon-r">{icon}</span>}
    </Button>
  );
}

export default FooterButton;
