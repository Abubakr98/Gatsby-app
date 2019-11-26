import React, { Component } from 'react'
import { Link } from 'gatsby'

import headerStyles from "../components/header.module.scss"

export default class NavLink extends Component {
  active = activeName => {
    if (window.location.pathname.indexOf(activeName)!==-1) {
      return ` ${headerStyles.activeNavItem}`
    }
    return ""
  }
  render() {
    return <Link {...this.props} className={this.props.className+this.active(this.props.to)}/>
  }
}