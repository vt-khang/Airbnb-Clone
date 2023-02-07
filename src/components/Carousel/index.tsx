import classNames from 'classnames';
import * as React from 'react';
import { CarouselProps } from './type';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import { computeDotsWidth, computeDotsWidthLeft, isCircleOuter } from './helper';

function Carousel({
  dotPosition = 'bottom',
  numSlide = 5,
  autoplay = false,
  duration = 8000,
  mode = 'default',
  arrowDisplay = 'both',
  className,
  children,
}: CarouselProps) {
  const prefixCls = 'crs';
  const totalSlide = React.Children.toArray(children).length;
  const computedNumSlide = numSlide > totalSlide ? totalSlide : numSlide;

  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const carouselRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    let delayTimer: number | null = null;

    if (autoplay) {
      delayTimer = window.setTimeout(() => {
        delayTimer = null;
        setCurrentSlide(currentSlide === totalSlide - 1 ? 0 : currentSlide + 1);
      }, duration);
    }

    function cleanUpTimer() {
      if (delayTimer) {
        window.clearTimeout(delayTimer);
        delayTimer = null;
      }
    }

    return cleanUpTimer;
  });

  const carouselWidth = carouselRef.current?.getBoundingClientRect().width || 0;
  const carouselWidthLeft = carouselWidth * currentSlide;
  const dotsWidth = computeDotsWidth(currentSlide, computedNumSlide, totalSlide);
  const dotsWidthLeft = computeDotsWidthLeft(currentSlide, computedNumSlide, totalSlide);

  const isFirstSlide = currentSlide === 0 && arrowDisplay === 'only';
  const isLastSlide = currentSlide === totalSlide - 1 && arrowDisplay === 'only';

  const classes = classNames('group crs', className);
  const btnClasses = classNames({ [`${prefixCls}-btn-${mode}`]: mode });
  const dotClasses = classNames('crs-dot', { [`${prefixCls}-dot-${dotPosition}`]: dotPosition });

  const handleDotClasses = (index: number) =>
    classNames('circle', {
      'circle-outer': isCircleOuter(currentSlide, computedNumSlide, totalSlide).includes(index) && totalSlide > 5,
      'circle-active': index === currentSlide,
    });

  const handleSlide = (changeSlide: number) => setCurrentSlide(changeSlide);

  return (
    <div
      className={classes}
      ref={carouselRef}
    >
      <div
        className="crs-list"
        style={{ left: -carouselWidthLeft }}
      >
        {children}
      </div>

      <div className={btnClasses}>
        {!isFirstSlide && (
          <div className="crs-prev-btn">
            <PrevButton
              currentSlide={currentSlide}
              totalSlide={totalSlide}
              onChangeSlide={handleSlide}
            />
          </div>
        )}
        {!isLastSlide && (
          <div className="crs-next-btn">
            <NextButton
              currentSlide={currentSlide}
              totalSlide={totalSlide}
              onChangeSlide={handleSlide}
            />
          </div>
        )}
      </div>

      <div
        className={dotClasses}
        style={{ width: dotsWidth }}
      >
        <div
          className="crs-dot-div"
          style={{ left: -dotsWidthLeft }}
        >
          {[...Array(totalSlide)].map((element, index) => (
            <span
              className={handleDotClasses(index)}
              key={index}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
