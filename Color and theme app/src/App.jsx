import React, { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

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

const toggle = () =>{
  setDarkTheme(!darkTheme)
}

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-6 ${darkTheme? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
    >
<button onClick={toggle}  className="px-5 py-2 rounded bg-blue-600 text-white">{darkTheme? "☀️ Light Mode" : "🌙 Dark Mode"}</button>

      <h1 className="text-4xl font-bold">Counter App</h1>
      <h2 className="text-6xl">{count}</h2>
      <div className="flex gap-5  ">
        <button
          onClick={increment}
          className="bg-green-600 px-5 py-2 text-2xl text-white rounded "
        >
          Inc ++
        </button>
        <button
          onClick={decrement}
          className="bg-red-600 px-5 py-2 text-2xl text-white rounded"
        >
          Dec --
        </button>
        <button
          onClick={reset}
          className="bg-gray-600 px-5 text-2xl py-2 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
