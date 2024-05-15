import React from "react";
import IconHexagon from "./icons/IconHexagon";

const MainLogo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <IconHexagon className="h-7 w-7 text-main-text-color fill-current" />
      <p className="text-2xl font-bold">Drojas</p>
    </div>
  );
};

export default MainLogo;
