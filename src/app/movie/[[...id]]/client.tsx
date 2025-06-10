"use client";
import { Nav, Detail } from "@/components";

export function MovieDetailLayout({ data }) {
  const pageTitle = "Movie details";
  return (
    <div className="flex basis-full">
      <main className="w-full">
        <Nav title={pageTitle} back />
        <Detail data={data} />
      </main>
    </div>
  );
}
