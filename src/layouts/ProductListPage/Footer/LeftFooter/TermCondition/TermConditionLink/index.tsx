import { TermConditionLinkProps } from './type';
import Button from '@/components/Button';

function TermConditionLink({ href, text }: TermConditionLinkProps) {
  return (
    <>
      <span className="dot">·</span>
      <Button
        type="link"
        href={href}
      >
        {text}
      </Button>
    </>
  );
}

export default TermConditionLink;
