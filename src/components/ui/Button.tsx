type ButtonProps = {
  id?: string;
  buttonType: 'close' | 'value' | 'delete' | 'submit';
  value?: string;
  disabled?: boolean;
  children: JSX.Element[] | JSX.Element;
  onClick?: (value?: string) => void;
};

const classes = {
  close:
    'w-[88px] h-[52px] text-primary_black border-2 border-black bg-primary_white hover:enabled:text-primary_white hover:bg-primary_black hover:border-0',
  value:
    'w-[88px] h-[52px] text-primary_black   border-2 border-black bg-transparent hover:text-primary_white hover:bg-primary_black hover:border-0',
  delete:
    'w-[186px] h-[52px] text-primary_black border-2 border-black bg-transparent hover:text-primary_white hover:bg-primary_black hover:border-0',
  submit:
    'w-[284px] h-[52px] text-primary_gray border-2 border-primary_gray bg-transparent hover:enabled:text-primary_white hover:enabled:bg-primary_black hover:enabled:border-0',
};

function Button({
  children,
  buttonType,
  value,
  disabled,
  id,
  onClick,
}: ButtonProps) {
  return (
    <button
      id={id}
      type={buttonType === 'submit' ? buttonType : 'button'}
      className={classes[buttonType]}
      disabled={disabled}
      onClick={onClick ? () => onClick(value) : () => {}}
    >
      {children}
    </button>
  );
}
export default Button;
