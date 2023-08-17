import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [minutesCounter, setMinutesCounter] = useState<number>(25);
  const [secondsCounter, setSecondsCounter] = useState<number>(0);
  const [startOrPause, setStartOrPause] = useState<boolean>(false);

  useEffect(() => {
    if (startOrPause) {
      if (secondsCounter === 0) {
        setSecondsCounter(59);
        setMinutesCounter((prev) => prev - 1);
      }
      const currentMinute = setTimeout(() => {
        setSecondsCounter((prev) => prev - 1);
      }, 1000);
    } else {
      console.log("Stopped!");
    }
    // return () => {
    //   setMinutesCounter(25);
    //   setSecondsCounter(0);
    //   setStartOrPause(false);
    // };
  }, [minutesCounter, secondsCounter, startOrPause]);

  return (
    <div
      id="timer"
      className="text-white"
      style={{
        border: "7px solid #13353a",
        margin: "20px auto 10px auto",
        width: "270px",
        height: "160px",
        borderRadius: "50px",
        position: "relative",
      }}
    >
      <div
        id="time-adjusted-controller"
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "-2.5rem",
          marginTop: "1.3rem",
          position: "absolute",
        }}
      >
        <button
          id="increase-minutes"
          value="+"
          className="inline-block bg-transparent cursor-pointer"
          onClick={() => {
            setMinutesCounter((prev) => prev + 1);
            setSecondsCounter(0);
          }}
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
        <button
          id="decrease-minutes"
          value="-"
          className="inline-block bg-transparent cursor-pointer"
          onClick={() => {
            setMinutesCounter((prev) => prev - 1);
            setSecondsCounter(0);
          }}
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
      </div>
      <div
        id="time-controller"
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          marginLeft: "17rem",
          marginTop: "2.5rem",
        }}
      >
        <button
          id="start_stop"
          className="bg-transparent inline-block"
          onClick={() => setStartOrPause(!startOrPause)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-play-fill "
            viewBox="0 0 16 16"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-pause-fill "
            viewBox="0 0 16 16"
          >
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
          </svg>
        </button>
        <button
          id="reset"
          onClick={() => {
            setMinutesCounter(25);
            setSecondsCounter(0);
            setStartOrPause(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-arrow-clockwise"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
          </svg>
        </button>
      </div>
      <div
        id="timer-wrapper"
        className="absolute w-190 h-110 inset-x-2/4"
        style={{
          marginTop: "-57px",
          marginLeft: "-95px",
          position: "absolute",
          width: "190px",
          height: "110px",
          top: "50%",
          left: "50%",
        }}
      >
        <div id="keep-track-of-current-time" style={{ display: "none" }}></div>
        <div id="timer-label">Session</div>
        <div
          id="time-left"
          className="font-digital"
          style={{ fontFamily: "digital", fontSize: "44px" }}
        >
          {minutesCounter}:{secondsCounter}
        </div>
      </div>
    </div>
  );
};

export default Timer;
