import {request}  from 'graphql-request'
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getGallery } from "../../Queries/getGallery";

export const Gallery = () => {

    const { data, isLoading, error } = useQuery({
      queryKey: ["giveMeTheGallery"],
      queryFn: async () => request(import.meta.env.VITE_PUBLIC_URL_ID, getGallery),
    });
    if (isLoading) {
      return <p>Loading... </p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  
    return (
    <img src = {data.galleries[0].dog.url} alt='cutedogs'/>
    );
  };

export default Gallery;