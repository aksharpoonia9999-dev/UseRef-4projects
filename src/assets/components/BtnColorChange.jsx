import { useRef } from "react";

const BtnColorChange = () => {
  let BtnRef = useRef();

  function colorChange() {
    if (BtnRef.current.style.background !== "") {
      BtnRef.current.style.background = "";
    } else {
      BtnRef.current.style.background = "Purple";
    }
  }

  return (
    <div className="flex items-center justify-center gap-5 flex-col bg-[linear-gradient(135deg,#1C1B22_0%,#25232E_50%,#343047_100%)] border border-solid border-[#454052] rounded-4xl size-125 ">
      <h1 className="text-white text-5xl mb-10">Button Color Change</h1>
      <button
        onClick={colorChange}
        className="bg-[linear-gradient(135deg,#155EEF_0%,#387BFF_50%,#65A4FF_100%)] w-50 h-12.5 rounded-3xl active:scale-95 cursor-pointer flex items-center justify-center text-2xl font-medium border border-solid text-white border-[#8BB9FF]"
      >
        Click Me
      </button>
      <button
        ref={BtnRef}
        className="bg-[linear-gradient(135deg,#155EEF_0%,#387BFF_50%,#65A4FF_100%)] w-50 h-12.5 rounded-3xl active:scale-95 cursor-pointer flex items-center justify-center text-2xl font-medium border border-solid text-white border-[#8BB9FF]"
      >
        Change Here
      </button>
    </div>
  );
};

export default BtnColorChange;
