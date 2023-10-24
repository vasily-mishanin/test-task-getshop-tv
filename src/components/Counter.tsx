import { useEffect, useState } from 'react';

type CounterProps = {
  count: number;
  toggle: boolean;
};

function Counter({ count, toggle }: CounterProps) {
  const [value, setValue] = useState(0);

  const decrementCounter = () => {
    setValue((prev) => prev - 1);
  };

  useEffect(() => {
    setValue(count);
    const intervalId = setInterval(decrementCounter, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [toggle]);

  return (
    <div className='absolute right-[40px] top-[100px] text-lg  text-primary_blue'>
      <span>{value}</span>
    </div>
  );
}
export default Counter;
