import classNames from 'classnames';
import * as React from 'react';
import { ButtonProps } from './type';
import LoadingIcon from '@/icons/LoadingIcon';

const WHITE_LOADING = '#f7f7f7';
const BLACK_LOADING = '#222222';

function Button({
  type = 'default',
  htmlType = 'button',
  shape = 'default',
  disabled = false,
  loadingTime,
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const prefixCls = 'btn';
  const isTextButton = ['text', 'link'].includes(type);
  const [showLoading, setShowLoading] = React.useState<boolean>(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  const buttonWidth = buttonRef.current?.getBoundingClientRect().width;
  const buttonHeight = buttonRef.current?.getBoundingClientRect().height;

  React.useEffect(() => {
    let delayTimer: number | null = null;

    if (showLoading && loadingTime !== 0) {
      delayTimer = window.setTimeout(() => {
        delayTimer = null;
        setShowLoading(false);
      }, loadingTime);
    } else if (showLoading && loadingTime === 0) {
      setShowLoading(true);
    }

    function cleanUpTimer() {
      if (delayTimer) {
        window.clearTimeout(delayTimer);
        delayTimer = null;
      }
    }

    return cleanUpTimer;
  }, [loadingTime, showLoading]);

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
    if (loadingTime) setShowLoading(true);
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
        style={{ width: buttonWidth, height: buttonHeight }}
        {...props}
      >
        {showLoading === true ? (
          <LoadingIcon
            size={8}
            color={type === 'default' ? WHITE_LOADING : BLACK_LOADING}
          />
        ) : (
          children
        )}
      </button>
    </>
  );
}

export default Button;
