import Image from 'next/image';
import Button from '@/components/Button';
import Carousel from '@/components/Carousel';
import CarouselItem from '@/components/CarouselItem';
import { ProductCardProps } from './type';
import StarIcon from '@/icons/StarIcon';
import HeartIcon from '@/icons/HeartIcon';
import { formatStringDate, fixFloatRating } from './helper';
import { numberWithDots } from '@/helpers/number';

function ProductCard({ listPictures, location, distance, startDate, endDate, price, rating }: ProductCardProps) {
  return (
    <div className="pd-card">
      <div className="pd-card-top">
        <Carousel
          arrowDisplay="only"
          mode="hover"
          className="pd-carousel"
        >
          {listPictures?.map((picture, index) => (
            <CarouselItem key={index}>
              <Image
                src={picture}
                alt="alt"
                width={10000}
                height={10000}
                className="pd-image"
              />
            </CarouselItem>
          ))}
        </Carousel>
        <Button
          type="text"
          className="pd-heart-btn"
        >
          <HeartIcon
            size={24}
            color="rgba(0, 0, 0, 0.5)"
          />
        </Button>
      </div>

      <div className="pd-card-bottom">
        <div className="pd-text-black-semibold">{location}</div>
        <div>
          <span className="pd-text-grey">Cách {numberWithDots(distance)} km</span>
        </div>
        <div>
          <span className="pd-text-grey">{formatStringDate(startDate, endDate)}</span>
        </div>
        <div className="pd-price">
          <span className="pd-text-black-semibold">${numberWithDots(price)}</span>
          <span className="pd-text-black"> đêm</span>
        </div>
        {rating && (
          <div className="pd-rating">
            <span>
              <StarIcon
                size={12}
                color="#222222"
              />
            </span>
            <span>{fixFloatRating(rating)}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
