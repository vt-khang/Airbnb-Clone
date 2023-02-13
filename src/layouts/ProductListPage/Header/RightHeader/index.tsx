import RentButton from './RentButton';
import LanguageButton from './LanguageButton';
import AccountButton from './AccountButton';

function RightHeader() {
  return (
    <nav className="nav">
      <div className="right-header">
        <RentButton />
        <div>
          <LanguageButton />
        </div>
      </div>
      <AccountButton />
    </nav>
  );
}

export default RightHeader;
