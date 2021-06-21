// type ButtonProps = {
//   children?: string;
// }

// export function Button(props: ButtonProps) {
//   return (
//     <button>{props.children || 'Default'}</button>
//   )
// }
import { useState } from "react";
export function Button() {
  // let counter = 0;
  const [counter, setCounter] = useState(0)
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <button onClick={increment}>{counter}</button>
  )
}

//named export