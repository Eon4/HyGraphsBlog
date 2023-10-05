import { request } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { getGallery } from '../../Queries/getGallery';
import style from './gallery.module.scss';

export const Gallery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['giveMeTheGallery'],
    queryFn: async () => request(import.meta.env.VITE_PUBLIC_URL_ID, getGallery),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2 className={style.doggyTitle}>Doggy Gallery</h2>
      <div className={style.doggyGrid}>
        {data.galleries.map((gallery, index) => (
          <div key={index} className={style.doggyImgContainer}>
            <img src={gallery.dog.url} alt={`Dog ${index + 1}`} className={style.doggyImg} />
          </div>
        ))}
      </div>
    </div>
  );
};
