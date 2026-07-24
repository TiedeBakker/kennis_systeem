import { NextRequest, NextResponse } from "next/server";

import { relationService } from "@/services/relationService";


//----------------------------------------------------
// GET
//----------------------------------------------------

export async function GET() {

    const relations =
        await relationService.getRelations();

    return NextResponse.json(relations);

}


//----------------------------------------------------
// POST
//----------------------------------------------------

export async function POST(
    request: NextRequest
) {

    const body = await request.json();

    const relation =
        await relationService.createRelation(
            body.label
        );

    return NextResponse.json(relation);

}


//----------------------------------------------------
// PUT
//----------------------------------------------------

export async function PUT(
    request: NextRequest
) {

    const relation =
        await request.json();

    const updated =
        await relationService.updateRelation(
            relation
        );

    return NextResponse.json(updated);

}


//----------------------------------------------------
// DELETE
//----------------------------------------------------

export async function DELETE(
    request: NextRequest
) {

    const id =
        request.nextUrl.searchParams.get("id");

    if (!id) {

        return NextResponse.json(
            { error: "Missing id" },
            { status: 400 },
        );

    }

    await relationService.deleteRelation(id);

    return NextResponse.json({
        success: true,
    });

}