import Logo from "../assets/logo";

export default function Loading() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-[#141414]">
      <div className="w-screen h-[60%] flex items-center justify-center">
        <Logo />
      </div>
      <div className="btm w-screen h-[40%] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <progress className="progress w-56"></progress>
        </div>
      </div>
    </div>
  );
}
