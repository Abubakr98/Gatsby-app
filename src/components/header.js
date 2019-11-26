import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import "./header.module.scss"
import headerStyles from "./header.module.scss"
import NavLink from '../NavLink/index'
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const active = activeName => {
    if (window.location.pathname.indexOf(activeName)!==-1) {
      return ` ${headerStyles.activeNavItem}`
    }
    return ""
  }
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <NavLink
              className={headerStyles.navItem}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={headerStyles.navItem}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={headerStyles.navItem}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
