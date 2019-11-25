import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery, StaticQuery } from "gatsby"
import Head from "../components/head"

import blogStyles from "./blog.module.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
          nodes {
            title
            slug
            publishedDate(formatString: "MMMM DD, YYYY")
            connectedCategory {
              categoryType
            }
          }
        }
        allContentfulCategory {
          nodes {
            categoryType
          }
        }
      }
    `}
    render={data => <BlogPage data={data} />}
  />
)
class BlogPage extends React.Component {
  state = {
    categories: ["Все"]
  }
  componentDidMount = () => {
    const arr = [];
    this.props.data.allContentfulCategory.nodes.map((el, i) => {
      arr.push(el.categoryType)
    })
    this.setState({ categories: [...this.state.categories, ...arr] });
  }
  render() {
    const types = this.state.categories.map((el, i) => {
      return (
        <span className={blogStyles.categories} key={i}>
          {el}
        </span>
      )
    })
    const posts = this.props.data.allContentfulBlogPost.nodes.map((el, i) => {
      return (
        <li key={i} className={blogStyles.post}>
          <Link to={"/blog/" + el.slug}>
            <span>{el.connectedCategory.categoryType}</span>
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
        <div>{types}</div>
        <ol className={blogStyles.posts}>{posts}</ol>
      </Layout>
    )
  }
}
