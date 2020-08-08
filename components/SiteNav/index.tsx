import React, { FunctionComponent, useState } from "react";
import styles from "./site-nav.module.scss";
import { Close, HamburgerMenu } from "@components/SVGs";
import LightSwitch from "@components/LightSwitch";

const SiteNav: FunctionComponent<{}> = () => {

  const [collapsed, setCollapsed] = useState(true);

  let classes = `${styles.item} ${styles.light}`;
  let toggle = <HamburgerMenu stroke="white" />;
  if (!collapsed) {
    classes += ` ${styles.active}`;
    toggle = <Close stroke="white" />;
  }
  return (
    <nav className={`${styles.site_nav} ${styles.light}`}>
      <ul className={`${styles.menu}`}>
        <li className={`${styles.logo}`}><a className={styles.light} href='/'>Bardic Collective</a></li>
        <li className={classes}><a className={styles.light} href='/'>Listen</a></li>
        <li className={classes}><a className={styles.light} href='/about'>About</a></li>

        <li><LightSwitch classes={styles.lightbulb}/></li>
        <li className={`${styles.toggle}`} onClick={() => setCollapsed(!collapsed)}>{toggle}</li>
      </ul>
    </nav>
  )
}

export default SiteNav;
