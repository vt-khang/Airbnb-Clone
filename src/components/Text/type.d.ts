export type TextTypes = 'heading' | 'paragraph';

export type TextProps = {
  type?: TextTypes;
  size?: number;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>