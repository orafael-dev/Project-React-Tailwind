import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import SideBar from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative ">


        <SideBar />
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
      </Container>
    </>
  );
}

export default App;
