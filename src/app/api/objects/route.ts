import { db } from "@/db";
import { objects } from "@/db/schema/schema";
import { desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";


export async function GET() {

  const result = await db
    .select()
    .from(objects)
    .orderBy(desc(objects.label));

  return NextResponse.json(result);
}



export async function POST(req: Request) {

  const body = await req.json();

  const object = {
    id: randomUUID(),
    label: body.label,
    validFrom: body.validFrom ?? null,
    validTo: body.validTo ?? null,
  };


  await db
    .insert(objects)
    .values(object);


  return NextResponse.json(object);
}



export async function PUT(req: Request) {

  const body = await req.json();


  await db
    .update(objects)
    .set({
      label: body.label,
      validFrom: body.validFrom ?? null,
      validTo: body.validTo ?? null,
    })
    .where(eq(objects.id, body.id));


  return NextResponse.json(body);
}