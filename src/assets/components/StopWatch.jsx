import { useRef, useState } from "react";
import Icons from "../common/Icons";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  let timerRef = useRef(null);

  function startTimer() {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTimer(0);
  }

  return (
    <div className="flex items-center justify-center flex-col bg-[linear-gradient(135deg,#202024_0%,#29252B_50%,#422332_100%)] border border-solid border-[#493540] rounded-4xl size-125 ">
      <h1 className="text-white text-5xl mb-10">StopWatch</h1>

      <h2 className="text-white text-6xl font-semibold">{timer}</h2>

      <div className="buttons flex items-center justify-center gap-5 mt-15">
        <button
          onClick={startTimer}
          className="bg-[linear-gradient(135deg,#6B3049_0%,#873D5A_50%,#A34D6A_100%)] cursor-pointer w-25 h-12.5 flex items-center justify-center rounded-3xl text-white border border-solid border-[#B86A83] transition-all duration-300 ease-out hover:bg-[linear-gradient(135deg,#873D5A_0%,#A34D6A_50%,#C16B87_100%)] hover:border-[#D18AA2] hover:shadow-[0_8px_25px_rgba(163,77,106,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
        >
          <Icons icon="play" />
        </button>
        <button
          onClick={pauseTimer}
          className="bg-[linear-gradient(135deg,#6B3049_0%,#873D5A_50%,#A34D6A_100%)] cursor-pointer w-25 h-12.5 flex items-center justify-center rounded-3xl text-white border border-solid border-[#B86A83] transition-all duration-300 ease-out hover:bg-[linear-gradient(135deg,#873D5A_0%,#A34D6A_50%,#C16B87_100%)] hover:border-[#D18AA2] hover:shadow-[0_8px_25px_rgba(163,77,106,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
        >
          <Icons icon="pause" />
        </button>
        <button
          onClick={resetTimer}
          className="bg-[linear-gradient(135deg,#6B3049_0%,#873D5A_50%,#A34D6A_100%)] cursor-pointer w-25 h-12.5 flex items-center justify-center rounded-3xl text-white border border-solid border-[#B86A83] transition-all duration-300 ease-out hover:bg-[linear-gradient(135deg,#873D5A_0%,#A34D6A_50%,#C16B87_100%)] hover:border-[#D18AA2] hover:shadow-[0_8px_25px_rgba(163,77,106,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
        >
          <Icons icon="reset" />
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
