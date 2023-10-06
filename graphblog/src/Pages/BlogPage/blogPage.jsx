
import {request}  from 'graphql-request'
import { useQuery } from "@tanstack/react-query";
import {getBlockPosts} from '../../Queries/getBlockPosts'
import React from 'react';
import style from "../../Pages/BlogPage/blockPage.module.scss";

export const Blog = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ["giveMeMyPosts"],
    queryFn: async () => request(import.meta.env.VITE_PUBLIC_URL_ID, getBlockPosts),
  });

  console.log(data)

  if (isLoading) {
    return <p>Loading... </p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
      <h2> blogs {data.posts[0].coverPhoto.url.description}</h2>
  );
};


export default Blog;