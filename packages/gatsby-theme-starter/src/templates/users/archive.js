import React from "react"
import Layout from "../../components/layout"
import PostEntry from "../../components/PostEntry"
import HeaderArchive from "../../components/HeaderArchive"
import SEO from "../../components/seo"

const AuthorArchive = props => {
  const {
    pageContext: { name, posts },
  } = props
  return (
    <Layout classNames="archive">
      <SEO
        title={`Author - ${name}`}
        description={`A collection of posts written by ${name}.`}
      />
      <HeaderArchive name={name} />

      {posts.nodes &&
        posts.nodes.map(post => {
          return <PostEntry key={post.id} post={post} />
        })}
    </Layout>
  )
}

export default AuthorArchive
