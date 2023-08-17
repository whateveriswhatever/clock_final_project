import React from "react";
import ClockContainerInnerApp from "./ClockContainerInnerApp";

const ClockContainer: React.FC = () => {
  return (
    <div id="container" className="flex h-screen justify-center items-center">
      <ClockContainerInnerApp />
    </div>
  );
};

export default ClockContainer;
