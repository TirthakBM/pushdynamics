import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customClassName?: string;
  customStyle?: React.CSSProperties;
}

export default function Input({
  customClassName = "",
  customStyle,
  ...rest
}: InputProps) {
  return (
    <input
      className={`input_css`}
      style={customStyle}
      {...rest}
    />
  );
}
