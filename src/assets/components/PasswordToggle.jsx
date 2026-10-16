import { useRef, useState } from "react";
import Icons from "../common/Icons";

const PasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null);

  function togglePassword() {
    setShowPassword(showPassword === true ? false : true);
  }

  return (
    <div className="flex items-center justify-center gap-5 flex-col bg-[linear-gradient(135deg,#171C1A_0%,#202B27_50%,#29443A_100%)] border border-solid border-[#3B594C] rounded-4xl size-125">
      <h1 className="text-white text-4xl mb-10">Password Visibility Toggle</h1>

      <div className="flex items-center justify-center max-w-112.5 w-full h-17.5 gap-2.5 border border-solid border-[#3B594C] p-4 rounded-full">
        <input
          ref={passwordRef}
          className="w-full outline-none placeholder:text-white text-white text-xl placeholder:text-xl"
          type={showPassword === true ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Enter Password"
        />

        <button
          type="button"
          onClick={togglePassword}
          className="cursor-pointer text-white"
        >
          {showPassword === true ? (
            <Icons icon="notvisible" />
          ) : (
            <Icons icon="visible" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordToggle;
