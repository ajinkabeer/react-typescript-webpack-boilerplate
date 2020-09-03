import { useState } from "react";

export const UseCounter = () => {
  const [count, setCount] = useState<number>(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return { count, increase, decrease };
};
