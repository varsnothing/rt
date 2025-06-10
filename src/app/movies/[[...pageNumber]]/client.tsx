"use client";
import { Nav, Grid, Pagination } from "@/components";

export function MoviesLayout({ data, page }) {
  const pageTitle = "Pop Movies";
  return (
    <div className="flex basis-full">
      <main className="w-full">
        <Nav title={pageTitle} />
        <Grid data={data?.results} />
        <Pagination page={page} />
      </main>
    </div>
  );
}
