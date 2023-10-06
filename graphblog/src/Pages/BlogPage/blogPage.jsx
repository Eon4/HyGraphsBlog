import { request } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { getBlockPosts } from '../../Queries/getBlockPosts';
import React, { useState } from 'react';
import style from '../../Pages/BlogPage/blockPage.module.scss';

export const Blog = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['giveMeMyPosts'],
    queryFn: async () =>
      request(import.meta.env.VITE_PUBLIC_URL_ID, getBlockPosts),
  });

  const [sortingOption, setSortingOption] = useState('date'); // Default sorting by date
  const [displayLatestPosts, setDisplayLatestPosts] = useState(false);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const posts = data?.posts || [];

  // Function to handle sorting
  const handleSorting = (option) => {
    setSortingOption(option);

    // Sort the posts based on the selected option
    if (option === 'date') {
      posts.sort((a, b) => new Date(b.dateAndTime) - new Date(a.dateAndTime));
    } else if (option === 'name') {
      posts.sort((a, b) => a.title.localeCompare(b.title));
    }
  };

  // Function to filter posts by the current date
  const filterLatestPosts = () => {
    const currentDate = new Date().toLocaleDateString();
    const latestPosts = posts.filter(
      (post) => new Date(post.dateAndTime).toLocaleDateString() === currentDate
    );
    return latestPosts;
  };

  const postsToDisplay = displayLatestPosts ? filterLatestPosts() : posts;
  const getLatestPostSnippet = () => {
    if (posts.length > 0) {
      const latestPost = posts[0]; // Get the latest post here 
      return (
        <div className={style.LatestPostSnippet}>
          <h3>Latest Article:</h3>
          <Link to={`/blogPage/${latestPost.id}`} className={style.LatestPostLink}>
            {latestPost.title}
          </Link>
          <p className={style.LatestPostDescription}>{latestPost.description}</p>
        </div>
      );
    }
    return null; // Return null if no posts
  };

  return (
    <div className={style.BlogContainer}>
      <h2 className={style.BlogTitle}>The Dog Blog</h2>
      
      <div className={style.FiltersAndButton}>
        <div className={style.Filters}>
          
          {/* Dropdown menu for sorting */}
          <select onChange={(e) => handleSorting(e.target.value)} className={style.SortingDropdown}>
            <option value="date">Sort by Date</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>

        <button
          onClick={() => setDisplayLatestPosts(!displayLatestPosts)}
          className={style.LatestPostsButton}
        >
          {displayLatestPosts
            ? 'Show All Posts'
            : 'Show Latest Posts from Today'}
        </button>
      </div>

      {postsToDisplay.length === 0 ? (
        <p className={style.NoPosts}>No blog posts available.</p>
      ) : (
        <ul className={style.PostList}>
          {postsToDisplay.map((post, index) => (
            <li key={index} className={style.PostItem}>
              <h1 className={style.PostTitle}>{post.title}</h1>
              <p className={style.Date}>Posted: {post.dateAndTime}</p>

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
