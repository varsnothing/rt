"use server";
import { MoviesLayout } from "./client";
import { getMovies } from "@/actions";

export default async function Movies({ params }) {
  const { pageNumber } = await params;
  const castPage = (pageNumber?.length && Number(pageNumber[0])) || 1;
  const data = await getMovies(castPage);

  return <MoviesLayout data={data} page={castPage} />;
}
