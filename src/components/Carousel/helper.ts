import { CIRCLE_WIDTH, CIRCLE_OUTER_WIDTH } from "./constants";

export const computeDotsWidth = (currentSlide: number, numSlide: number, totalSlide: number) => {
  if (totalSlide <= 5) return numSlide * CIRCLE_WIDTH + (numSlide - 1) * 4;
  else if (currentSlide <= Math.floor(numSlide / 2) ||
    currentSlide >= totalSlide - Math.floor(numSlide / 2) - 1)
    return (numSlide - 1) * CIRCLE_WIDTH + CIRCLE_OUTER_WIDTH + (numSlide - 1) * 4;
  else return (numSlide - 2) * CIRCLE_WIDTH + 2 * CIRCLE_OUTER_WIDTH + (numSlide - 1) * 4;
}

export const computeDotsWidthLeft = (currentSlide: number, numSlide: number, totalSlide: number) => {
  if (currentSlide <= Math.floor(numSlide / 2)) return 0;
  else if (currentSlide >= totalSlide - Math.floor(numSlide / 2) - 1) return (totalSlide - numSlide) * 12;
  else return (currentSlide - numSlide + Math.floor(numSlide / 2) + 1) * 12;
}

export const isCircleOuter = (currentSlide: number, numSlide: number, totalSlide: number) => {
  if (currentSlide <= Math.floor(numSlide / 2)) return [numSlide - 1];
  else if (currentSlide >= totalSlide - Math.floor(numSlide / 2) - 1) return [totalSlide - numSlide];
  else return [currentSlide - Math.floor(numSlide / 2), currentSlide + Math.floor(numSlide / 2)];
} 