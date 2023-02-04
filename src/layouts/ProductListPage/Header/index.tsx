import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

function Header() {
  return (
    <header
      className="h-20 px-20 flex items-center justify-between"
      style={{ boxShadow: 'inset 0 -1px 0 rgb(0 0 0 / 6%)' }}
    >
      <div>
        <LeftHeader />
      </div>
      <div>
        <RightHeader />
      </div>
    </header>
  );
}

export default Header;
