import { getMovie } from "@/actions";

export async function POST(req) {
  try {
    const payload = await req.json();
    const movie = payload?.id;

    const data = getMovie(movie);

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
  }
}
