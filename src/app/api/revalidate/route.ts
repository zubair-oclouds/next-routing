'use server'

import { NextResponse } from "next/server";
import { revalidateTag } from 'next/cache'

export async function GET() {
    revalidateTag('collection')
    return NextResponse.json({
        "message": 'Revalidation Completed'
    })
}