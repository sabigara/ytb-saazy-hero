import React from "react";
import styles from "./Stats.module.scss";

type Props = {
  items: { term: string; data: string }[];
};

export default function Stats({ items }: Props) {
  return (
    <dl className={styles.list}>
      {items.map(({ term, data }) => (
        <div className={styles.item}>
          <dt className={styles.tarm}>{term}</dt>
          <dd className={styles.data}>{data}</dd>
        </div>
      ))}
    </dl>
  );
}
