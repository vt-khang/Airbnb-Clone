import Button from '@/components/Button';
import LogoBrand from '@/icons/LogoBrand';

function LeftHeader() {
  return (
    <Button
      type="link"
      href="/"
    >
      <LogoBrand color="#ff385c" />
    </Button>
  );
}

export default LeftHeader;
