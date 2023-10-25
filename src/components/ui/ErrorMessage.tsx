type ErrorMessageProps = {
  text: string;
  isHidden: boolean;
};

function ErrorMessage({ text, isHidden }: ErrorMessageProps) {
  return (
    <div
      className={`z-0 absolute bottom-36 w-[284px] h-[52px] text-accent_red font-bold flex items-center justify-center ${
        isHidden ? 'opacity-0 top-0' : ''
      }`}
    >
      <span>{text}</span>
    </div>
  );
}
export default ErrorMessage;
