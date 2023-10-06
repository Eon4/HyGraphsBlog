import { request } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { getBlockPosts } from '../../Queries/getBlockPosts';
import React from 'react';
import style from '../../Pages/BlogPage/blockPage.module.scss';

export const Blog = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['giveMeMyPosts'],
    queryFn: async () =>
      request(import.meta.env.VITE_PUBLIC_URL_ID, getBlockPosts),
  });

  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const posts = data?.posts || [];

  return (
    <div className={style.BlogContainer}>
      <h2 className={style.BlogTitle}>Blog Posts</h2>
      {posts.length === 0 ? (
        <p className={style.NoPosts}>No blog posts available.</p>
      ) : (
        <ul className={style.PostList}>
          {posts.map((post, index) => (
            <li key={index} className={style.PostItem}>
       <h1 className={style.PostTitle}>{post.title}</h1>
       <p className={style.Date}> Posted: {post.dateAndTime}</p>

              <img
                src={post.coverPhoto.url}
                alt={post.description}
                className={style.PostImage}
              />
              <p className={style.PostDescription}>{post.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

