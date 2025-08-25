import { API } from "@/app/lib";
import { Post } from "@/app/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const link = searchParams.get("link");

  const postsUrl = API.getBaseURL();
  postsUrl.pathname += "/posts";
  const postsRes = await fetch(postsUrl, {
    cache: "no-cache",
  });
  const posts: Post[] = await postsRes.json();

  const post = posts.find((post) => link?.includes(post.slug));

  return Response.json(post || null);
}
