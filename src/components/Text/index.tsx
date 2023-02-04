import { TextProps } from './type';

function Text({ type = 'heading', size = 1, className, children, ...props }: TextProps) {
  return (
    <>
      {type === 'heading' && size === 1 && (
        <h1
          className={className}
          {...props}
        >
          {children}
        </h1>
      )}
      {type === 'heading' && size === 2 && (
        <h2
          className={className}
          {...props}
        >
          {children}
        </h2>
      )}
      {type === 'heading' && size === 3 && (
        <h3
          className={className}
          {...props}
        >
          {children}
        </h3>
      )}
      {type === 'heading' && size === 4 && (
        <h4
          className={className}
          {...props}
        >
          {children}
        </h4>
      )}
      {type === 'heading' && size === 5 && (
        <h5
          className={className}
          {...props}
        >
          {children}
        </h5>
      )}
      {type === 'heading' && size === 6 && (
        <h6
          className={className}
          {...props}
        >
          {children}
        </h6>
      )}
      {type === 'paragraph' && (
        <p
          className={className}
          {...props}
        >
          {children}
        </p>
      )}
    </>
  );
}

export default Text;
