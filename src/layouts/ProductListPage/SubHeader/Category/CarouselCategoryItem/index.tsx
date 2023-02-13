import classNames from 'classnames';
import Image from 'next/image';
import { CarouselCategoryItemProps } from './type';

function CarouselCategoryItem({ image, text, active = false }: CarouselCategoryItemProps) {
  const classes = classNames(
    'crs-cate',
    {
      'cursor-default': active,
      'cursor-pointer': !active,
    },
    'group'
  );
  const imageClasses = classNames({ 'crs-cate-img': !active });
  const textClasses = classNames({ 'crs-cate-text': !active, 'crs-cate-text-active': active });

  return (
    <label className={classes}>
      {/* <input
        checked={checked}
        className="crs-cate-input"
      /> */}
      <div className="crs-cate-div">
        <span className="crs-cate-span">
          <Image
            src={image}
            alt="alt"
            width={24}
            height={24}
            className={imageClasses}
          />
          <div className={textClasses}>
            <span>{text}</span>
          </div>
        </span>
      </div>
    </label>
  );
}

export default CarouselCategoryItem;
