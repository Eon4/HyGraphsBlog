import React from 'react';
import style from "../../Pages/About/about.module.scss";
import AboutDogs from '../../assets/images/header-dogs-group.jpg'

export const AboutPage = () => {
  return (
    <>
      <h1 className={style.AboutTex}>About Us</h1>
      <div className={style.AboutDogandUs}>
        <img src={AboutDogs} alt="aboutUs" />
        <p className={style.AboutDogandUsText}>
          We're a passionate group of dog lovers who started this blog 
          because of our deep affection for our furry friends. 
          Our journey began in 2022 when we realized that the world needed 
          more love, information, and stories about dogs. Our Love for Dogs: 
          Dogs have a special place in our hearts. They bring joy, companionship,
          and endless smiles to our lives. Through this blog, we aim to
          share our experiences, knowledge, and adoration for these 
          amazing creatures with fellow dog enthusiasts like you. Join us 
          on this pawsome adventure as we celebrate the wonderful world of
          dogs, sharing tips, stories, and everything in between. Together,
          let's wag our tails in the spirit of canine companionship!
        </p>
      </div>
    </>
  );
};

export default AboutPage;

