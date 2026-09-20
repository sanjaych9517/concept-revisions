import React, { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

// increment function
const increment = () =>{
   setCount(count+1);
}

// decrement function

const decrement = () => {
  setCount(count-1);
}

const reset = () => {
setCount(0)
}

  return (
    <div className="flex justify-center flex-col items-center bg-red-300 gap-3 ">
      <h1 className="text-3xl">Counter App</h1>
      <h2>count = {count}</h2>
      <div className="flex gap-5  ">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
