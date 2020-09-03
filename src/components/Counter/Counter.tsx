import React from "react";
import { UseCounter } from "../../hooks/useCounter";

export const CounterComponent = () => {
  const { count, increase, decrease } = UseCounter();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Ddecrement</button>
    </div>
  );
};
