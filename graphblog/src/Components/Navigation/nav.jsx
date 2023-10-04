import React from 'react';
import style from '../Navigation/nav.module.scss'

const Navigation = () => {
  return (
    <nav className ={style.topnavigation}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
