import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

export const Path=React.createContext({path:""});

const Layout = props => {
  // console.log(props.path);
  
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
       <Path.Provider value={{path:props.path}}> <Header /></Path.Provider>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
export default Layout
