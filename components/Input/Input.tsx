import React, { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

const Input = (props: InputProps) => {
  return (
    <label className="flex flex-col gap-1" htmlFor={props.name}>
      <span className="text-sm font-bold">{props.label}</span>
      <input
        className="border-2 p-1 border-black  focus:bg-neutral-200 focus:shadow-md"
        {...props}
      />
    </label>
  );
};

export default Input;
