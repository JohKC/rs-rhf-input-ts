import { ReactNode } from "react";

interface ErrorMessageProps {
    children: ReactNode,
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
      <span className="text-danger">{children}</span>
  )
};
