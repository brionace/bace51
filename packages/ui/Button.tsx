"use client";

import React, { StyleHTMLAttributes } from "react";

interface Button {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: (value: any) => void;
}

export const Button = ({ children, style, className, onClick }: Button) => {
  return (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
};
