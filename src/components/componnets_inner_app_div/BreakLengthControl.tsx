import React from "react";
import { useState } from "react";

const BreakLength: React.FC = () => {
  const [counter, setCounter] = useState<number>(5);
  return (
    <div
      id="length-control"
      className="inline-block w-250"
      style={{ width: "250px" }}
    >
      <div id="break-label">Break Length</div>
      <button
        id="break-decrement"
        value="-"
        className="inline-block bg-transparent cursor-pointer"
        onClick={() => setCounter((prev) => prev - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-caret-down text-2em inline-block"
          viewBox="0 0 16 16"
        >
          <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
        </svg>
      </button>
      <div id="break-length" className="w-20 inline-block">
        {counter}
      </div>
      <button
        id="break-increment"
        className="inline-block bg-transparent cursor-pointer"
        value="+"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-caret-up text-2em inline-block"
          viewBox="0 0 16 16"
        >
          <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
        </svg>
      </button>
    </div>
  );
};

export default BreakLength;
