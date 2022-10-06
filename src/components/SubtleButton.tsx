import React from "react";
import styles from "./SubtleButton.module.scss";

type Props = {
  children?: React.ReactNode;
};

export default function SubtleButton({ children }: Props) {
  return <button className={styles.button}>{children}</button>;
}
