import { getMovies } from "@/actions";

export async function POST(req) {
  try {
    const payload = await req.json();
    const page = payload?.page || 1;

    const data = getMovies(page);

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
  }
}
