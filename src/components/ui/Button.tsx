type ButtonProps = {
  id?: string;
  buttonType: 'close' | 'value' | 'delete' | 'submit';
  value?: string;
  disabled?: boolean;
  children: JSX.Element[] | JSX.Element;
  onClick?: (value?: string) => void;
};

const hoverStyles =
  'hover:text-primary_white hover:bg-primary_black hover:border-0 hover:border-black';

const focusStyles =
  'focus:text-primary_white focus:bg-primary_black focus:border-0 focus:border-black focus:outline-none';

const submitActiveStyles =
  'hover:enabled:text-primary_white hover:enabled:bg-primary_black hover:enabled:border-0 focus:enabled:text-primary_white focus:enabled:bg-primary_black focus:enabled:border-0';

const classes = {
  close: `w-[88px] h-[52px] text-primary_black border-2 border-black bg-primary_white  ${hoverStyles} ${focusStyles} `,
  value: `w-[88px] h-[52px] text-primary_black border-2 border-black bg-transparent  ${hoverStyles} ${focusStyles}`,
  delete: `w-[186px] h-[52px] text-primary_black border-2 border-black bg-transparent  ${hoverStyles} ${focusStyles}`,
  submit: `w-[284px] h-[52px] text-primary_gray border-2 border-primary_gray bg-transparent ${submitActiveStyles}`,
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
