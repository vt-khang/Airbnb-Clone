export type IconPositions = 'left' | 'right';

export type FooterButtonProps = {
  icon: React.ReactNode;
  iconPosition?: IconPositions;
  text: string;
}