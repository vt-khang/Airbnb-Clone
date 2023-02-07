import * as React from 'react';
import { NextButtonProps } from './type';
import ArrowIcon from '@/icons/ArrowIcon';
import Button from '@/components/Button';

function NextButton({ currentSlide, totalSlide, onChangeSlide, ...props }: NextButtonProps) {
  const handleNextSlide = () => {
    const nextSlide = currentSlide === totalSlide - 1 ? 0 : currentSlide + 1;
    onChangeSlide(nextSlide);
  };

  return (
    <Button
      type="default"
      shape="circle"
      className="next-btn"
      onClick={handleNextSlide}
      {...props}
    >
      <span>
        <ArrowIcon
          size={12}
          color="#222222"
        />
      </span>
    </Button>
  );
}

export default NextButton;
