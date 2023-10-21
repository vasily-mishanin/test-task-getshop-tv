type ButtonProps = {
  children: JSX.Element[];
  width: 'sm' | 'lg' | 'xl';
  height: 'sm' | 'lg' | 'xl';
  border?: number;
  rounded?: boolean;
};

const widthMap = {
  sm: '88px',
  lg: '186px',
  xl: '284px',
};

const heightMap = {
  sm: '52px',
  lg: '134px',
  xl: '200px',
};

function Button({ children, width, height, rounded, border }: ButtonProps) {
  const buttonStyle = {
    width: widthMap[width],
    height: heightMap[height],
    borderRadius: rounded ? '0.5rem' : '',
    border: border ? `${border}px solid black` : '',
  };

  return <button style={buttonStyle}>{children}</button>;
}
export default Button;
