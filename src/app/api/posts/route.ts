import { NextResponse } from "next/server";
import posts from "@/app/posts.json";

export async function GET() {
  return NextResponse.json(posts);
}
