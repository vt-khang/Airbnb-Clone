import CarouselCategory from './CarouselCategory';
import CategoryNextButton from './CarouselCategory/CategoryNextButton';
import CategoryPrevButton from './CarouselCategory/CategoryPrevButton';
import CarouselCategoryItem from './CarouselCategoryItem';

function Category() {
  return (
    <>
      <div className="relative mr-5">
        <CarouselCategory>
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
            text="Nông thôn"
            active
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
            text="Nhiệt đới"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg"
            text="Phục vụ bữa sáng"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
            text="Thật ấn tượng!"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"
            text="Nhà nhỏ"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg"
            text="Phòng riêng"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
            text="Khung cảnh tuyệt vời"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg"
            text="Không gian sáng tạo"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
            text="Thiết kế"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
            text="Bãi biển"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
            text="Được ưa chuộng"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"
            text="Nhà khung chữ A"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg"
            text="Vườn nho"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
            text="Nhà mang tính lịch sử"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
            text="Hồ bơi tuyệt vời"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
            text="Các thành phố nổi tiếng"
          />
          <CarouselCategoryItem
            image="https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg"
            text="Nhà không sử dụng các dịch vụ tiện ích"
          />
        </CarouselCategory>
      </div>
      {/* <div className="crs-cate-prev-btn">
        <CategoryPrevButton />
      </div> */}
      <div className="crs-cate-next-btn">
        <CategoryNextButton />
      </div>
    </>
  );
}

export default Category;
