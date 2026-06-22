import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  asChild?: false;
};

type ButtonChildProps = {
  variant?: "primary" | "secondary";
  asChild: true;
  children: ReactNode;
};

const variants = {
  primary: "border-transparent bg-primary text-white hover:bg-primary-dark",
  secondary: "border-line bg-white text-ink hover:bg-slate-50",
};

export function Button(props: ButtonProps | ButtonChildProps) {
  const variant = props.variant ?? "primary";
  const className = `inline-flex min-h-11 items-center justify-center rounded-[13px] border px-4 py-2.5 text-sm font-bold transition hover:-translate-y-0.5 ${variants[variant]}`;

  if (props.asChild) {
    return <span className={className}>{props.children}</span>;
  }

  const { children, className: extraClassName, ...buttonProps } = props;

  return (
    <button className={`${className} ${extraClassName ?? ""}`} {...buttonProps}>
      {children}
    </button>
  );
}
