import React from "react";

import Layout from '../components/MyLayout';
import PostLink from "../components/PostLink";

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
}

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {getPosts().map(post => (
                    <PostLink key={post.id} post={post} />
                ))}
            </ul>
            <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }
      `}</style>
        </Layout>
    );
}