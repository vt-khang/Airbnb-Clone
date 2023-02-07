import Button from '@/components/Button';
import LanguageIcon from '@/icons/LanguageIcon';

function ButtonTest() {
  return (
    <>
      <div className="mx-10 my-10 flex items-center gap-4">
        <Button>Default Button</Button>
        <Button
          type="outline"
          onClick={() => console.log('Outline Button')}
        >
          Outline Button
        </Button>
        <Button type="text">Text Button</Button>
        <Button
          type="link"
          href="/"
          onClick={() => console.log('Link Button')}
        >
          Link Button
        </Button>
      </div>
      <div className="mx-10 my-10 flex items-center gap-4">
        <Button>
          <LanguageIcon
            color="#ffffff"
            className="m-2"
          />
        </Button>
        <Button
          type="outline"
          onClick={() => console.log('Outline Button')}
          className="inline-flex items-center justify-center"
        >
          <span className="mr-2">
            <LanguageIcon
              color="#222222"
              className="group-hover:fill-red-100"
            />
          </span>
          Outline Button
        </Button>
      </div>
      <div className="mx-10 my-10 flex items-center gap-4">
        <Button disabled>Default Button</Button>
        <Button
          type="outline"
          disabled
          onClick={() => console.log('Outline Button')}
        >
          Outline Button
        </Button>
        <Button
          type="text"
          disabled
        >
          Text Button
        </Button>
        <Button
          type="link"
          href="/"
          disabled
          onClick={() => console.log('Link Button')}
        >
          Link Button
        </Button>
      </div>
      <div className="mx-10 my-10 flex items-center gap-4">
        <Button shape="round">Round Button</Button>
        <Button shape="circle">Circle Button</Button>
      </div>
      <div className="mx-10 my-10 flex items-center gap-4">
        <Button loading={{ delay: 3000 }}>Default Button</Button>
        <Button
          type="outline"
          loading
          onClick={() => console.log('Outline Button')}
        >
          Outline Button
        </Button>
        <Button
          type="text"
          loading={{ delay: 3000 }}
        >
          Text Button
        </Button>
        <Button
          type="link"
          loading={{ delay: 3000 }}
          href="/"
          onClick={() => console.log('Link Button')}
        >
          Link Button
        </Button>
      </div>
    </>
  );
}

export default ButtonTest;
