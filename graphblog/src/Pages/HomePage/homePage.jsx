import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../Pages/HomePage/homePage.module.scss'; // Make sure to import the correct SCSS module

const Homepage = () => {
  return (
    <div className={style.HomepageContainer}>
      <h2>Welcome to Our Dog Blog</h2>
      <p>
        Explore the fascinating world of our four-legged companions through
        heartwarming stories, helpful tips, and captivating adventures. Our dog
        blog is dedicated to celebrating the bond between humans and their furry
        friends. Join us on a journey filled with tail-wagging tales, expert
        insights, and everything you need to know about being the best pet
        parent. Whether you're a seasoned dog lover or a new pup enthusiast,
        our blog has something for everyone. Get ready to embark on an adventure
        of love, laughter, and endless pawprints.
      </p>

      <h3>
        <Link to="/blogPage" className={style.LatestArticlesLink}>
          Latest Blogs
        </Link>
      </h3>
    </div>
  );
};

export default Homepage;

