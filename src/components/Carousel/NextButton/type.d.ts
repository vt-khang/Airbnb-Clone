import { ButtonProps } from '@/components/Button/type';

export type NextButtonProps = {
  currentSlide: number;
  totalSlide: number;
  onChangeSlide: ((prevSlide: number) => void);
} & ButtonProps;