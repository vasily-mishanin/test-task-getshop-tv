import Button from './ui/Button';

type KeyboardProps = {
  onNumberButtonClick: (value?: string) => void;
  onDeleteButtonClick: () => void;
};

function Keyboard({ onNumberButtonClick, onDeleteButtonClick }: KeyboardProps) {
  return (
    <div className='flex flex-wrap gap-[10px] py-5 mb-2'>
      <Button
        id='num1'
        buttonType='value'
        value='1'
        onClick={onNumberButtonClick}
      >
        <span>1</span>
      </Button>
      <Button
        id='num2'
        buttonType='value'
        value='2'
        onClick={onNumberButtonClick}
      >
        <span>2</span>
      </Button>
      <Button
        id='num3'
        buttonType='value'
        value='3'
        onClick={onNumberButtonClick}
      >
        <span>3</span>
      </Button>
      <Button
        id='num4'
        buttonType='value'
        value='4'
        onClick={onNumberButtonClick}
      >
        <span>4</span>
      </Button>
      <Button
        id='num5'
        buttonType='value'
        value='5'
        onClick={onNumberButtonClick}
      >
        <span>5</span>
      </Button>
      <Button
        id='num6'
        buttonType='value'
        value='6'
        onClick={onNumberButtonClick}
      >
        <span>6</span>
      </Button>
      <Button
        id='num7'
        buttonType='value'
        value='7'
        onClick={onNumberButtonClick}
      >
        <span>7</span>
      </Button>
      <Button
        id='num8'
        buttonType='value'
        value='8'
        onClick={onNumberButtonClick}
      >
        <span>8</span>
      </Button>
      <Button
        id='num9'
        buttonType='value'
        value='9'
        onClick={onNumberButtonClick}
      >
        <span>9</span>
      </Button>
      <Button id='backspace' buttonType='delete' onClick={onDeleteButtonClick}>
        <span>СТЕРЕТЬ</span>
      </Button>
      <Button
        id='num0'
        buttonType='value'
        value='0'
        onClick={onNumberButtonClick}
      >
        <span>0</span>
      </Button>
    </div>
  );
}
export default Keyboard;
