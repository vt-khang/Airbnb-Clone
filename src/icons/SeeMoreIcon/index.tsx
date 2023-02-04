import classNames from 'classnames';
import { SeeMoreIconProps } from './type';

function SeeMoreIcon({ size = 16, color = '#000', className }: SeeMoreIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      fill="none"
      height={size}
      width={size}
      stroke={color}
      className={classNames('block stroke-[3px] overflow-visible', className)}
    >
      <g
        fill="none"
        fillRule="nonzero"
      >
        <path d="m2 16h28"></path>
        <path d="m2 24h28"></path>
        <path d="m2 8h28"></path>
      </g>
    </svg>
  );
}

export default SeeMoreIcon;
