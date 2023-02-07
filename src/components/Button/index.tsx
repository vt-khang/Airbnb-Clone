import classNames from 'classnames';
import * as React from 'react';
import { ButtonProps } from './type';
import LoadingIcon from '@/icons/LoadingIcon';
import { BLACK_LOADING, WHITE_LOADING } from './constants';

function Button({
  type = 'default',
  htmlType = 'button',
  shape = 'default',
  disabled = false,
  loading = false,
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const prefixCls = 'btn';
  const isTextButton = ['text', 'link'].includes(type);
  const [showLoading, setShowLoading] = React.useState<boolean | number>(!!loading);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  const loadingOrDelay: boolean | number = typeof loading === 'boolean' ? loading : loading?.delay || true;

  React.useEffect(() => {
    let delayTimer: number | null = null;

    if (typeof loadingOrDelay === 'number') {
      delayTimer = window.setTimeout(() => {
        delayTimer = null;
        setShowLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setShowLoading(loadingOrDelay);
    }

    function cleanUpTimer() {
      if (delayTimer) {
        window.clearTimeout(delayTimer);
        delayTimer = null;
      }
    }

    return cleanUpTimer;
  }, [loadingOrDelay]);

  const classes = classNames(
    'group',
    {
      [`${prefixCls}`]: type !== 'link',
      [`${prefixCls}-${shape}`]: shape !== 'default' && shape,
      [`${prefixCls}-${type}`]: type && !disabled,
      [`${prefixCls}-${type}-loading`]: showLoading,
      [`${prefixCls}-disabled-1`]: disabled && !isTextButton,
      [`${prefixCls}-disabled-2`]: disabled && isTextButton,
    },
    className
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (showLoading || disabled) {
      event.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(event);
  };

  if (type == 'link') {
    return (
      <a
        className={classes}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <>
      <button
        type={htmlType}
        className={classes}
        disabled={disabled}
        onClick={handleClick}
        ref={buttonRef}
        {...props}
      >
        {showLoading && (
          <span className="absolute">
            <LoadingIcon
              size={8}
              color={type === 'default' ? WHITE_LOADING : BLACK_LOADING}
            />
          </span>
        )}
        {children}
      </button>
    </>
  );
}

export default Button;
