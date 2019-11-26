import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"
import BlogHeader from "../components/blogHeader"
import Layout from "../components/layout"
import Disqus from 'disqus-react';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['ru']
        const url = node.data.target.fields.file.ru.url
        return <img alt={alt} src={url} />
      }
    }
  }
  const disqusShortname = 'project-txs2q54no9'; 
  const disqusConfig = {
    url: props.location.href,
    identifier: props.data.contentfulBlogPost.id,
    title: props.data.contentfulBlogPost.title,
  };
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>Blog</h1>
      <BlogHeader/>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      <div>
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    </Layout>
  )
}

export default Blog
