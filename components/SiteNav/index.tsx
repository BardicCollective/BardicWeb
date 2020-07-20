import React, { Component } from "react";
import styles from "./site-nav.module.scss";
import { Close, HamburgerMenu } from "@components/SVGs";
// import LightSwitch from "@components/LightSwitch";

interface SiteNavProps {}

interface SiteNavStateProps {
  collapsed: boolean;
}

class SiteNav extends Component<SiteNavProps,SiteNavStateProps> {
  constructor(props: SiteNavProps) {
    super(props)
    this.state = {
      collapsed: true
    };
  }

  handleToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { collapsed } = this.state;
    let classes = styles.item;
    let toggle = <HamburgerMenu stroke="white" />;
    if (!collapsed) {
      classes += ` ${styles.active}`;
      toggle = <Close stroke="white" />;
    }
    return (
      <nav className={styles.site_nav}>
        <ul className={`${styles.menu}`}>
          <li className={`${styles.logo}`}><a href='/'>Bardic Collective</a></li>
          <li className={classes}><a href='/'>Listen</a></li>
          <li className={classes}><a href='/about'>About</a></li>

          {/*<li className='lightSwitch'><LightSwitch /></li>*/}
          <li className={`${styles.toggle}`} onClick={this.handleToggle}>{toggle}</li>
        </ul>
      </nav>
    )
  }
}

export default SiteNav;
