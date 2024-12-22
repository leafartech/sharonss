import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const response = await fetch('https://ipapi.co/json/', {
        headers: {
            "Content_Type": "application/json",
            "Accept": "application/json"
        }
    })

    // const data = await response.json()

    console.log(response    )

    return NextResponse.json({ data: '' })
  }