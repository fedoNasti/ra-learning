import { useState } from "react"
import CounterLogger from "./CounterLogger";
import Counter from './Counter'


const CounterApp = () => {
  const [value, setValue] = useState(0);
  const LoggetCounter = CounterLogger(Counter);

  return (
    <LoggetCounter
      value={value}
      addOne={ () => setValue(value => value + 1) }
      decOne={ () => setValue(value => value - 1) }
    />
  );
}

export default CounterApp;