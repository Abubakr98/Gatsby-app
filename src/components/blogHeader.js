import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import "./header.module.scss"
import NavLink from '../NavLink/index'
import headerStyles from "./header.module.scss"

const Header = (props) => {
  // const ThemeContext = React.createContext('light');
  
  const data = useStaticQuery(graphql`
    query{
      allContentfulCategory {
        nodes {
          categoryType
          slug
        }
      }
    }
  `)
  const categories = data.allContentfulCategory.nodes.map((el, i)=>{
    return(
      <li key={i}>
      <NavLink className={headerStyles.navItem}  to={"/blog/" + el.slug}>
        {el.categoryType}
      </NavLink>
    </li>
    )
  })
  
  return (
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">
              Все
            </Link>
          </li>
          {
            categories
          }
        </ul>
      </nav>
  )
}
export default Header
