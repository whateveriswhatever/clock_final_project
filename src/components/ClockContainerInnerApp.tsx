import React from "react";
import MainTitle from "./componnets_inner_app_div/MainTitle";
import Author from "./componnets_inner_app_div/Author";
import Timer from "./componnets_inner_app_div/Timer";
import TimerControl from "./componnets_inner_app_div/TimerControl";
import BreakLength from "./componnets_inner_app_div/BreakLengthControl";
import SessionLength from "./componnets_inner_app_div/SessionLengthControl";

const ClockContainerInnerApp: React.FC = () => {
  return (
    <div id="app">
      <div>
        <MainTitle />
        <BreakLength />
        <SessionLength />
        <Timer />
        {/* <TimerControl /> */}
        <br />
        <br />
        <br />
        <Author />
      </div>
    </div>
  );
};

export default ClockContainerInnerApp;
