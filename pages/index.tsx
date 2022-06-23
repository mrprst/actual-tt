import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import Post, { PostProps } from '../components/Post'

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = props => {
  return (
    <Layout>
      <div className="page">
        <h1>Technical Test</h1>
        <main>
          {props.feed.map(post => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
        <h2>
        <a>ACT-TT1 - Echiquier</a>
        <a>ACT-TT2 - Fibonacci</a>
        <a>ACT-TT3 - Modélisation</a>
        <a>ACT-TT4 - Tests Unitaires</a>
        </h2>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/feed')
  const feed = await res.json()
  return {
    props: { feed },
  }
}

export default Blog
