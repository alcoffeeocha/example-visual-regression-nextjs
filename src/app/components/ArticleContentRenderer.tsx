"use client";

import { useEffect, useRef } from "react";
import { APP } from "../lib";

export default function ArticleContentRenderer({
  content,
}: {
  content: string;
}) {
  const mountedRef = useRef(false);
  useEffect(() => {
    // injecting stylesheet
    if (mountedRef.current) return;
    if (!window.document) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    const publicUrl = APP.getURL();
    publicUrl.pathname += "article.css";
    link.href = publicUrl.toString();
    document.head.appendChild(link);
    mountedRef.current = true;
  });
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
