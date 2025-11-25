import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-bold text-xl">
      <Image
        src="/logo.png"
        alt="Logo"
        width={800}
        height={800}
        className="w-7"
      />
      <span>Sketchaura</span>
    </div>
  );
};
