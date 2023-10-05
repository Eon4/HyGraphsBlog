
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { getHeader } from "../../Queries/getHeader";
import style from '../Header/header.module.scss';


export const Header = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["giveMeHeader"],
    queryFn: async () => request(import.meta.env.VITE_PUBLIC_URL_ID, getHeader),
  });

  console.log(data)

  if (isLoading) {
    return <p>Loading... </p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <header>
      {/* <h2>{data.headers[0].headerTitle}</h2> */}
      <img className={style.doggyHeader} src={data.headers[0].image.url} alt="" />
    </header>
  );
};