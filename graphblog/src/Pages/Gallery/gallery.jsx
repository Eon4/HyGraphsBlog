import {request}  from 'graphql-request'
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getGallery } from "../../Queries/getGallery";

export const Gallery = () => {

    const { data, isLoading, error } = useQuery({
      queryKey: ["giveMeTheGallery"],
      queryFn: async () => request(import.meta.env.VITE_PUBLIC_URL_ID, getGallery),
    });
    console.log(data)


    if (isLoading) {
      return <p>Loading... </p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  
    return (
      <div>
        {data.galleries.map((gallery, index) => (
          <div key={index}>
            <img src={gallery.dog.url} alt={`Dog ${index + 1}`} />
          </div>
        ))}
      </div>
    );
  };

export default Gallery;