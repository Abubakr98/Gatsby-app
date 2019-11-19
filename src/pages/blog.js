import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
        nodes {
          title
          slug
          publishedDate(formatString: "MMMM DD, YYYY")
        }
      }
    }
  `)
  const post = data.allContentfulBlogPost.nodes.map((el, i) => {
    return (
      <li key={i} className={blogStyles.post}>
        <Link to={"/blog/" + el.slug}>
          <h2>{el.title}</h2>
          <p>{el.publishedDate}</p>
        </Link>
      </li>
    )
  })
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>{post}</ol>
    </Layout>
  )
}

export default BlogPage
