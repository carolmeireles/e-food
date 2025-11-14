import { Btn } from "./styles";

export type Props = {
  onClick?: () => void;
  children: string;
  type: "submit" | "button" | "reset";
  className?: string;
  disabled?: boolean;
  title: string;
};

const Button = ({
  onClick,
  children,
  type,
  className,
  disabled,
  title,
}: Props) => {
  return (
    <Btn
      onClick={onClick}
      type={type}
      className={className}
      disabled={disabled}
      title={title}
    >
      {children}
    </Btn>
  );
};

export default Button;
