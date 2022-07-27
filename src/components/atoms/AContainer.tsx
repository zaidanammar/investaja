import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  border?: boolean;
  className?: string;
};

const AContainer = ({ children, border, className }: Props) => {
  return (
    <main
      className={
        "bg-white p-5 w-full h-full " +
        (border && "border border-borderColor rounded-md ") +
        className
      }
    >
      {children}
    </main>
  );
};

export default AContainer;
