import { useState } from "react";

export default function CountFunc() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>CountFunc: {count}</button>
  );
}
