import RentButton from './RentButton';
import LanguageButton from './LanguageButton';
import AccountButton from './AccountButton';

function RightHeader() {
  return (
    <>
      <div className="mr-3 flex items-center justify-end">
        <RentButton />
        <LanguageButton />
        <AccountButton />
      </div>
    </>
  );
}

export default RightHeader;
