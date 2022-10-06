import React from "react";
import PrimaryButton from "./PrimaryButton";
import { ReactComponent as LogoSvg } from "../assets/logo.svg";
import { ReactComponent as SearchSvg } from "../assets/search.svg";

import styles from "./Header.module.scss";
import GhostButton from "./GhostButton";
import Navigation from "./Navigation";

type Props = unknown;

export default function Header(props: Props) {
  return (
    <header className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.logoWrap}>
          <LogoSvg />
        </div>
        <Navigation
          items={[
            {
              href: "#",
              label: "Home",
            },
            {
              href: "#features",
              label: "Features",
            },
            {
              href: "#pricing",
              label: "Pricing",
            },
            {
              href: "#developers",
              label: "Developers",
            },
          ]}
        />
      </div>
      <div className={styles.rightSection}>
        <button aria-label="Search" className={styles.searchButton}>
          <SearchSvg />
        </button>
        <GhostButton>Sign in</GhostButton>
        <PrimaryButton>Get started for free</PrimaryButton>
      </div>
    </header>
  );
}
