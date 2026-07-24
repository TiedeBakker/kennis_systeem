import { NextRequest, NextResponse } from "next/server";

import { objectService } from "@/services/objectService";


// ----------------------------------------------------------------------
// GET
// ----------------------------------------------------------------------

export async function GET() {

    const objects = await objectService.getObjects();

    return NextResponse.json(objects);

}


// ----------------------------------------------------------------------
// POST
// ----------------------------------------------------------------------

export async function POST(request: NextRequest) {

    const body = await request.json();

    const object = await objectService.createObject(
        body.label
    );

    return NextResponse.json(object);

}


// ----------------------------------------------------------------------
// PUT
// ----------------------------------------------------------------------

export async function PUT(request: NextRequest) {

    const object = await request.json();

    const updated = await objectService.updateObject(object);

    return NextResponse.json(updated);

}


// ----------------------------------------------------------------------
// DELETE
// ----------------------------------------------------------------------

export async function DELETE(request: NextRequest) {

    const id = request.nextUrl.searchParams.get("id");

    if (!id) {

        return NextResponse.json(
            { error: "Missing id" },
            { status: 400 }
        );

    }

    await objectService.deleteObject(id);

    return NextResponse.json({
        success: true,
    });

}