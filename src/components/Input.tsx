import React, { forwardRef } from "react";

interface InputTypes extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputTypes>((props, ref) => {
  return (
    <div className="flex gap-1">
      {/* <label className="min-w-max font-medium">habib ~&gt;</label> */}
      <label className="min-w-max font-medium">habib: $ ~</label>
      <input
        className="w-full bg-transparent border-none outline-none"
        autoFocus
        ref={ref}
        {...props}
      />
    </div>
  );
});
export default Input;
