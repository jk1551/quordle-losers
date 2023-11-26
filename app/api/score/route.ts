import { Database } from "@/types/supabase";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import "next"

export async function POST(request: Request) {
  const { phone, score } = await request.json();

  let updatedString = score.replace(/^Score:\s*/, '');

  const supabase = createRouteHandlerClient<Database>({ cookies });

  const { data: userInfo } = await supabase
    .from("user").select("*").eq("phone", phone).single()

    const { data: scoreInfo } = await supabase
    .from("resulttype").select("*").eq("name", updatedString).single()

  const { data: newScore } = await supabase
    .from("scores").insert({ userid: userInfo?.id, resulttypeid: scoreInfo?.id, createddate: new Date().toJSON() })
  return NextResponse.json(newScore);
}