import Button from '@/components/Button';
import Text from '@/components/Text';

function TopPromotion() {
  return (
    <div className="div">
      <Text
        type="heading"
        size={1}
        className="heading"
      >
        Xem trước tổng giá
      </Text>
      <span>
        <Button
          type="text"
          className="view-more-btn"
        >
          <span className="view-more-btn-span">Tìm hiểu thêm</span>
        </Button>
      </span>
    </div>
  );
}

export default TopPromotion;
