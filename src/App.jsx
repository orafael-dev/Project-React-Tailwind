import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header />
      <div
        className="h-screen
      bg-zinc-800 text-zinc-100"
      >
        <h1 className="text-3xl text-center">Ready to start with Tailwind</h1>
        <button
          className="
        mx-auto w-fit my-8 py-2 px-4 block rounded-lg border-transparent
        hover:border-cyan-500 border-2
        transition-colors
        "
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
