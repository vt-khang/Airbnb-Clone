export type ButtonTypes = 'default' | 'outline' | 'text' | 'link';
export type ButtonShapes = 'default' | 'round' | 'circle';
export type ButtonHTMLTypes = 'button' | 'submit' | 'reset';

export type ButtonProps = {
  type?: ButtonTypes;
  htmlType?: ButtonHTMLTypes;
  shape?: ButtonShapes;
  disabled?: boolean;
  loadingTime?: number;
  href?: string;
  target?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>
  & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>, 'type' | 'onClick'>;