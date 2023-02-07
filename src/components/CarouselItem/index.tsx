import { CarouselItemProps } from './type';

function CarouselItem({ children }: CarouselItemProps) {
  return <div className="crs-item">{children}</div>;
}

export default CarouselItem;
