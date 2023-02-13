import TermConditionLink from './TermConditionLink';

function TermCondition() {
  return (
    <span className="term-condition">
      <ol>
        <li>
          <TermConditionLink
            href="/"
            text="Quyền riêng tư"
          />
        </li>
        <li>
          <TermConditionLink
            href="/"
            text="Điều khoản"
          />
        </li>
        <li>
          <TermConditionLink
            href="/"
            text="Sơ đồ trang web"
          />
        </li>
      </ol>
    </span>
  );
}

export default TermCondition;
