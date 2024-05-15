"use client";
import useStore from "@/store";
import React from "react";

interface ThemeProviderProp {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProp) => {
  const theme = useStore((state) => state.theme);
  return (
    <div id="main-container" className={theme}>
      {children}
    </div>
  );
};

export default ThemeProvider;
