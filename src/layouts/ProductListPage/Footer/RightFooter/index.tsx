import FooterButton from './FooterButton';
import LanguageIcon from '@/icons/LanguageIcon';
import ArrowIcon from '@/icons/ArrowIcon';

function RightFooter() {
  return (
    <div className="footer-center">
      <div className="footer-center">
        <span className="mr-6">
          <FooterButton
            icon={<LanguageIcon color="#222222" />}
            text="Tiếng Việt (VN)"
          />
        </span>
        <span className="mr-6">
          <FooterButton
            icon={<span>$</span>}
            text="USD"
          />
        </span>
      </div>
      <FooterButton
        icon={
          <ArrowIcon
            color="#222222"
            className="-rotate-90 translate-y-[2px]"
          />
        }
        iconPosition="right"
        text="Hỗ trợ và tài nguyên"
      />
    </div>
  );
}

export default RightFooter;
