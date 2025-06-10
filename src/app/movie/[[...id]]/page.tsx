"use server";
import { MovieDetailLayout } from "./client";
import { getMovie } from "@/actions";

export default async function Movies({ params }) {
  const { id } = await params;
  const data = await getMovie(id);

  return <MovieDetailLayout data={data} />;
}
