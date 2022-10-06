import React from "react";

import styles from "./GhostButton.module.scss";

type Props = {
  children?: React.ReactNode;
};

export default function GhostButton({ children }: Props) {
  return <button className={styles.button}>{children}</button>;
}
