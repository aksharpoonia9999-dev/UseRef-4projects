import { useRef } from "react";

const AutoFocus = () => {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div className="flex items-center justify-center gap-5 flex-col bg-[linear-gradient(135deg,#101B1D_0%,#1D3032_50%,#285052_100%)] border border-solid border-[#3B5E5D] rounded-4xl size-125">
      <h1 className="text-white text-4xl font-medium">AUTO FOCUS</h1>

      <div className="max-w-112.5 w-full mt-10">
        <input
          ref={inputRef}
          type="text"
          className="w-full rounded-full border border-solid border-white/40 outline-[#3B5E5D] placeholder:text-white placeholder:text-base p-4 h-12.5 text-white text-base"
          placeholder="Type anything...."
        />
      </div>

      <button
        onClick={focusInput}
        className="transition-all w-50 h-12.5 bg-[linear-gradient(135deg,#176B68_0%,#248F89_50%,#48B7AC_100%)] duration-300 ease-out cursor-pointer rounded-full hover:border-[#9AE3DA] active:translate-y-0 active:scale-95 text-lg text-white font-semibold"
      >
        Focus
      </button>
    </div>
  );
};

export default AutoFocus;
