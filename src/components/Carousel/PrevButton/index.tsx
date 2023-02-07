import * as React from 'react';
import { PrevButtonProps } from './type';
import ArrowIcon from '@/icons/ArrowIcon';
import Button from '@/components/Button';

function PrevButton({ currentSlide, totalSlide, onChangeSlide, ...props }: PrevButtonProps) {
  const handlePrevSlide = () => {
    const prevSlide = currentSlide === 0 ? totalSlide - 1 : currentSlide - 1;
    onChangeSlide(prevSlide);
  };

  return (
    <Button
      type="default"
      shape="circle"
      className="prev-btn"
      onClick={handlePrevSlide}
      {...props}
    >
      <span>
        <ArrowIcon
          size={12}
          color="#222222"
          className="rotate-180"
        />
      </span>
    </Button>
  );
}

export default PrevButton;
