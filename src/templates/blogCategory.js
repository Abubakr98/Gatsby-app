import React from "react"
import Layout from "../components/layout"
import BlogHeader from "../components/blogHeader"
import { Link, graphql } from "gatsby"
import Head from "../components/head"

import blogStyles from "../pages/blog.module.scss"

export const query =  graphql`
query($slug: String!) {
    allContentfulBlogPost(sort: {fields: publishedDate, order: ASC}, filter: {connectedCategory: {slug: {eq: $slug}}}) {
      nodes {
        title
        slug
        publishedDate(formatString: "MMMM DD, YYYY")
        connectedCategory {
          slug
        }
      }
    }
  }
`

const BlogPage = (props) => {
  const post = props.data.allContentfulBlogPost.nodes.map((el, i) => {
    return (
      <li key={i} className={blogStyles.post}>
        <Link to={"/blog/"+ el.connectedCategory.slug+'/' + el.slug}>
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
      <BlogHeader></BlogHeader>
      <ol className={blogStyles.posts}>{post}</ol>
    </Layout>
  )
}

export default BlogPage
