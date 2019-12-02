import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = (props) => {
 
  return (
    <Layout path={props.path}>
      <Head title="Home"/>
      <h1>Hello.</h1>
      <h2>Im Abubakr a programmer</h2>
      <p>
        Need a developer? <Link to="/contact">contact</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
