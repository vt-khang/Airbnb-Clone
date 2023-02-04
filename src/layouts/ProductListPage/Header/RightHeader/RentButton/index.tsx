import Button from '@/components/Button';

function RentButton() {
  return (
    <Button
      type="link"
      href="/"
      shape="circle"
      className="rent-btn"
    >
      <div className="rent-btn-div">Cho thuê chỗ ở qua Airbnb</div>
    </Button>
  );
}

export default RentButton;
