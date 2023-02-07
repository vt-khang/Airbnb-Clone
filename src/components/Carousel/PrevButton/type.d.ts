import { ButtonProps } from '@/components/Button/type';

export type PrevButtonProps = {
  currentSlide: number;
  totalSlide: number;
  onChangeSlide: ((prevSlide: number) => void);
} & ButtonProps;