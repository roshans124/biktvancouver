import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export function Button({ asChild, className = "", ...props }: Props) {
  if (asChild) {
    // Use when wrapping an <a> inside the button styling
    const { children, ...rest } = props;
    return (
      <span
        className={
          "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition " +
          className
        }
        {...rest}
      >
        {children}
      </span>
    );
  }
  return (
    <button
      className={
        "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition " +
        className
      }
      {...props}
    />
  );
}
