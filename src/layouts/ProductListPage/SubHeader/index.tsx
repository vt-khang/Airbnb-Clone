import classNames from 'classnames';
import * as React from 'react';
import { SubHeaderProps } from './type';
import Category from './Category';
import Filter from './Filter';

function SubHeader({ className }: SubHeaderProps) {
  const [scrollPosition, setScrollPosition] = React.useState<number>(0);
  const topPosition = scrollPosition <= 64 ? 80 : scrollPosition > 84 ? 60 : 144 - scrollPosition;

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
    'sub-header',
    {
      ['sub-header-sticky']: scrollPosition > 64,
    },
    className
  );

  return (
    <div
      className={classes}
      style={{ top: topPosition }}
    >
      <div className="left-sub-header">
        <Category />
      </div>
      <div className="right-sub-header">
        <Filter />
      </div>
    </div>
  );
}

export default SubHeader;
