import ArrowIcon from '@/icons/ArrowIcon';
import Button from '@/components/Button';

function CategoryNextButton() {
  return (
    <Button
      type="default"
      shape="circle"
      className="cate-next-btn"
    >
      <span>
        <ArrowIcon
          size={12}
          color="#222222"
        />
      </span>
    </Button>
  );
}

export default CategoryNextButton;
