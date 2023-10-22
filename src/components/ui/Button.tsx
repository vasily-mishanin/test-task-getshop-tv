type ButtonProps = {
  children: JSX.Element[] | JSX.Element;
  buttonType: 'close' | 'value' | 'delete' | 'submit';
  value?: string;
  onClick: (value?: string) => void;
};

const classes = {
  close:
    'w-[88px] h-[52px] border-2 border-black bg-primary_white hover:text-primary_white hover:bg-primary_black hover:border-0',
  value:
    'w-[88px] h-[52px] border-2 border-black bg-transparent hover:text-primary_white hover:bg-primary_black hover:border-0',
  delete: '284px',
  submit: '',
};

function Button({ children, buttonType, onClick, value }: ButtonProps) {
  return (
    <button className={classes[buttonType]} onClick={() => onClick(value)}>
      {children}
    </button>
  );
}
export default Button;
