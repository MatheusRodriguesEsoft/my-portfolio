import { ReactNode } from "react";
import styles from "./styles/Button.module.css";
import Link from "next/link";

interface ButtonProps {
  label?: string;
  icon?: ReactNode;
  width: string | number | undefined;
  href: string
}

const Button = ({ label, icon, width, href }: ButtonProps) => {
  return (
    <Link href={href} style={{width: width}} className={styles.button}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {label && <span>{label}</span>}
    </Link>
  );
};

export default Button;
