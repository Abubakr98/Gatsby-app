import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import "./header.module.scss"
import headerStyles from "./header.module.scss"
import NavLink from '../NavLink/index'
import {Path} from "./layout"
const Header = (props) => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <Path.Consumer>
       {({path})=>console.log(path)}
      </Path.Consumer>
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
            <Link
              className={headerStyles.navItem}
              to="/about"
              activeClassName={headerStyles.activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/contact"
              activeClassName={headerStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
