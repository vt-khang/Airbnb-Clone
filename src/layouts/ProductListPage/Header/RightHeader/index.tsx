import RentButton from './RentButton';
import LanguageButton from './LanguageButton';
import AccountButton from './AccountButton';

function RightHeader() {
  return (
    <nav className="flex items-center justify-center">
      <div className="mr-2 flex items-center justify-end">
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
