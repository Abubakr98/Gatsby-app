const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blogPost.js")
  const post = await graphql(`
    query {
      allContentfulBlogPost(filter: {connectedCategory: {slug: {ne: null}}}) {
        nodes {
          slug
          connectedCategory {
            slug
          }
        }
      }
    }
  `)
  post.data.allContentfulBlogPost.nodes.forEach(node => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.connectedCategory.slug}/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })

  const blogCategoryTemplate = path.resolve("./src/templates/blogCategory.js")
  const blogCategory = await graphql(`
    query {
      allContentfulCategory {
        nodes {
          slug
        }
      }
    }
  `)
  blogCategory.data.allContentfulCategory.nodes.forEach(node => {
    createPage({
      component: blogCategoryTemplate,
      path: `/blog/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}
