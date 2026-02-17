import Link from "next/link";
import React from "react";

type GreenButtonProps =
  | ({
      href: string;
    } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function GreenButton(props: GreenButtonProps) {
  const baseClass = "btn green_btn";

  if ("href" in props) {
    const { href, className = "", children, ...rest } = props;

    return (
      <Link
        href={href}
        className={`${baseClass} ${className}`}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { className = "", children, ...rest } = props;

  return (
    <button
      className={`${baseClass} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
