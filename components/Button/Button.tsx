import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="bg-neutral-950 w-full text-white rounded shadow px-2 py-1"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
