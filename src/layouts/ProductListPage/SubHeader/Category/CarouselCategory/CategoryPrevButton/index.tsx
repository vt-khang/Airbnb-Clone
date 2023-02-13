import ArrowIcon from '@/icons/ArrowIcon';
import Button from '@/components/Button';

function CategoryPrevButton() {
  return (
    <Button
      type="default"
      shape="circle"
      className="cate-prev-btn"
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

export default CategoryPrevButton;
