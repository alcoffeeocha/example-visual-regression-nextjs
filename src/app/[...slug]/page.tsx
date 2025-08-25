import { notFound } from "next/navigation";
import { API, APP } from "../lib";
import { Post } from "../types";
import ArticleContentRenderer from "../components/ArticleContentRenderer";
import Link from "next/link";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

export const dynamic = "force-dynamic";

export default async function PostPage({ params: { slug } }: PostPageProps) {
  const appUrl = APP.getURL();
  const resourceUrl = API.getBaseURL();
  resourceUrl.pathname += "/post";
  resourceUrl.searchParams.set("link", `${appUrl.toString()}${slug.join("/")}`);

  const response = await fetch(resourceUrl, {
    cache: "no-cache",
  });
  const data: Post = await response.json();
  if (!data) {
    notFound();
  }
  return (
    <main className="centered">
      <article>
        <h1>{data.title}</h1>
        <ArticleContentRenderer content={data.contentHTML} />
      </article>
      <Link href="/">← Back</Link>
    </main>
  );
}
