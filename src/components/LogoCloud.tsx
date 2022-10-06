import React from "react";
import { ReactComponent as Logo1Svg } from "../assets/logo-1.svg";
import { ReactComponent as Logo2Svg } from "../assets/logo-2.svg";
import { ReactComponent as Logo3Svg } from "../assets/logo-3.svg";
import { ReactComponent as Logo4Svg } from "../assets/logo-4.svg";
import { ReactComponent as Logo5Svg } from "../assets/logo-5.svg";

import styles from "./LogoCloud.module.scss";

export default function LogoCloud() {
  return (
    <div className={styles.container}>
      <Logo1Svg />
      <Logo2Svg />
      <Logo3Svg />
      <Logo4Svg />
      <Logo5Svg />
    </div>
  );
}
