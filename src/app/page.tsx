import Link from "next/link";
import { API } from "./lib";
import { Post } from "./types";

export default async function PostsList() {
  const resourceUrl = API.getBaseURL();
  resourceUrl.pathname += "/posts";
  const response = await fetch(resourceUrl, {
    cache: "no-cache",
  });
  const data: Post[] = await response.json();

  return (
    <main className="centered">
      <ul className="default-list">
        {data.map((post) => (
          <li className="default-list-item" key={post.id}>
            <Link href={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
