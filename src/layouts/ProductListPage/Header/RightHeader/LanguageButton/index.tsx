import Button from '@/components/Button';
import LanguageIcon from '@/icons/LanguageIcon';

function LanguageButton() {
  return (
    <Button
      type="text"
      shape="circle"
      className="lang-btn"
    >
      <div>
        <LanguageIcon />
      </div>
    </Button>
  );
}

export default LanguageButton;
