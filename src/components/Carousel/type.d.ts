export type DotPositions = 'bottom' | 'top';
export type CarouselModes = 'default' | 'hover';
export type ArrowDisplayModes = 'both' | 'only';

export type CarouselProps = {
  dotPosition?: DotPositions;
  numSlide?: number;
  autoplay?: boolean;
  duration?: number;
  mode?: CarouselModes;
  arrowDisplay?: ArrowDisplayModes;
  className?: string;
  children?: React.ReactNode;
}