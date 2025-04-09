import { ReactNode } from "react";
import styles from "./styles/Button.module.css";

interface ButtonProps {
  label?: string;
  icon?: ReactNode;
  width: string | number | undefined
}

const Button = ({ label, icon, width }: ButtonProps) => {
  return (
    <button style={{width: width}} className={styles.button}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
