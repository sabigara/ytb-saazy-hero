import styles from "./Navigation.module.scss";

type Props = {
  items: { href: string; label: string }[];
};

export default function Navigation({ items }: Props) {
  return (
    <nav>
      <ul className={styles.list}>
        {items.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
