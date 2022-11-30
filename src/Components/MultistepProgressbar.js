import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

function MultistepProgressbar(props) {
  return (
    <ProgressBar
        percent={((props.step - 1) * 100)/2}
        filledBackground="linear-gradient(to right, #e9bc55, #caa159)"
      >
        <Step transition="scale">
            {({ accomplished, currentStepIndex }) => (
                <div className={`text-sm w-[20px] h-[20px] bg-[#e9bc55] rounded-full flex justify-center items-center text-white ${accomplished ? "completed" : ""}`}>
                    1
                </div>
            )}
        </Step>
        <Step transition="scale">
            {({ accomplished, currentStepIndex }) => (
                <div className={`text-sm w-[20px] h-[20px] bg-[#e4b157] rounded-full flex justify-center items-center text-white ${accomplished ? "completed" : ""}`}>
                    2
                </div>
            )}
        </Step>
        <Step transition="scale">
            {({ accomplished, currentStepIndex }) => (
                <div className={`text-sm w-[20px] h-[20px] bg-[#caa159] rounded-full flex justify-center items-center text-white ${accomplished ? "completed" : ""}`}>
                    3
                </div>
            )}
        </Step>
      </ProgressBar>
  )
}

export default MultistepProgressbar