import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { GraphQLClient } from 'graphql-request';
import request from "graphql-request";
import { Link, useParams } from "react-router-dom";
// import { getGallerys } from "../Query/getGallery";

export const Gallery = () => {

  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () =>
      request(
        "",
        getGallery,
        { personId: id }
      ),
  });

  return (
    
<h1>Gallery page here</h1>

  );
};

export default Gallery;