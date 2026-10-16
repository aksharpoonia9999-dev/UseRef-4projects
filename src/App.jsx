import AutoFocus from "./assets/components/AutoFocus";
import BtnColorChange from "./assets/components/BtnColorChange";
import PasswordToggle from "./assets/components/PasswordToggle";
import StopWatch from "./assets/components/StopWatch";

const App = () => {
  return (
    <section className="flex items-center justify-center flex-col py-10 gap-25">
      <StopWatch />
      <BtnColorChange />
      <PasswordToggle />
      <AutoFocus />
    </section>
  );
};

export default App;
