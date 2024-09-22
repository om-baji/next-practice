import { NextRequest, NextResponse } from "next/server"

export async function GET(){
    console.log("Hello")
    return Response.json({
        name : "Om",
        email : "king@gmail.com"
    })
}

export async function POST(req:NextRequest , res : NextResponse) {
    const body = await req.json()
    console.log(body)

    return NextResponse.json({
        body
    })
}