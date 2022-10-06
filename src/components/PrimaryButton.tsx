import React from "react";
import styles from "./PrimaryButton.module.scss";

type Props = {
  children?: React.ReactNode;
};

export default function PrimaryButton({ children }: Props) {
  return <button className={styles.button}>{children}</button>;
}
