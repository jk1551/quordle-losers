import { Database } from "@/types/supabase";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import "next"

export async function POST(request: Request) {
  const { userId, score } = await request.json();

  const supabase = createRouteHandlerClient<Database>({ cookies });
  const { data } = await supabase
    .from("scores").insert({ userid: userId, resulttypeid: score, createddate: new Date().toJSON() })
  return NextResponse.json(data);
}