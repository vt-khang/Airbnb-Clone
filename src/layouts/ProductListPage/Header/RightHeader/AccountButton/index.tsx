import Button from '@/components/Button';
import SeeMoreIcon from '@/icons/SeeMoreIcon';
import AccountIcon from '@/icons/AccountIcon';

function AccountButton() {
  return (
    <Button
      type="outline"
      shape="circle"
      className="acc-btn"
    >
      <div>
        <SeeMoreIcon color="#222222" />
      </div>
      <div className="ml-3">
        <AccountIcon
          size={30}
          color="#717171"
        />
      </div>
    </Button>
  );
}

export default AccountButton;
