import { CarouselCategoryProps } from './type';

function CarouselCategory({ children }: CarouselCategoryProps) {
  return <div className="crs-cate">{children}</div>;
}

export default CarouselCategory;
