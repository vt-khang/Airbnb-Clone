import Carousel from '@/components/Carousel';
import CarouselItem from '@/components/CarouselItem';

function CarouselTest() {
  return (
    <div className="m-16 grid grid-cols-2">
      <div className="m-6">
        <Carousel>
          <CarouselItem>
            <div className="bg-primary-red w-full h-full flex items-center justify-center">1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-purple w-full h-full flex items-center justify-center">2</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-green w-full h-full flex items-center justify-center">3</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-secondary-dark w-full h-full flex items-center justify-center">4</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-red w-full h-full flex items-center justify-center">5</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-purple w-full h-full flex items-center justify-center">6</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-green w-full h-full flex items-center justify-center">7</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-secondary-dark w-full h-full flex items-center justify-center">8</div>
          </CarouselItem>
        </Carousel>
      </div>
      <div className="m-6">
        <Carousel
          className="rounded-3xl !w-[600px]"
          mode="hover"
        >
          <CarouselItem>
            <div className="bg-primary-red w-full h-full flex items-center justify-center">1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-purple w-full h-full flex items-center justify-center">2</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-green w-full h-full flex items-center justify-center">3</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-secondary-dark w-full h-full flex items-center justify-center">4</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-red w-full h-full flex items-center justify-center">5</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-purple w-full h-full flex items-center justify-center">6</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-green w-full h-full flex items-center justify-center">7</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-secondary-dark w-full h-full flex items-center justify-center">8</div>
          </CarouselItem>
        </Carousel>
      </div>
      <div className="m-6">
        <Carousel
          arrowDisplay="only"
          numSlide={7}
        >
          <CarouselItem>
            <div className="bg-primary-red w-full h-full flex items-center justify-center">1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-purple w-full h-full flex items-center justify-center">2</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-green w-full h-full flex items-center justify-center">3</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-secondary-dark w-full h-full flex items-center justify-center">4</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-red w-full h-full flex items-center justify-center">5</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-purple w-full h-full flex items-center justify-center">6</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-green w-full h-full flex items-center justify-center">7</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-secondary-dark w-full h-full flex items-center justify-center">8</div>
          </CarouselItem>
        </Carousel>
      </div>
      <div className="m-6">
        <Carousel
          autoplay
          duration={3000}
        >
          <CarouselItem>
            <div className="bg-primary-red w-full h-full flex items-center justify-center">1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-purple w-full h-full flex items-center justify-center">2</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-green w-full h-full flex items-center justify-center">3</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-secondary-dark w-full h-full flex items-center justify-center">4</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-red w-full h-full flex items-center justify-center">5</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-purple w-full h-full flex items-center justify-center">6</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-primary-green w-full h-full flex items-center justify-center">7</div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-secondary-dark w-full h-full flex items-center justify-center">8</div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselTest;
