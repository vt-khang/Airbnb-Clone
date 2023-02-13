import classNames from 'classnames';
import * as React from 'react';
import { HeaderProps } from './type';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

function Header({ className }: HeaderProps) {
  const [scrollPosition, setScrollPosition] = React.useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const classes = classNames(
    'header',
    {
      ['header-sticky']: scrollPosition > 64,
    },
    className
  );

  return (
    <header className={classes}>
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
