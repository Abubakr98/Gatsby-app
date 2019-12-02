import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from "../components/head"

const AboutPage = (props) => {
  return (
    <Layout path={props.path}>
      <Head title="About" />
      <h1>About me</h1>
      <p>Im a programmer</p>
      <p>
        Need a developer? <Link to="/contact">contact</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
