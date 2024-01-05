import { NextResponse } from "next/server"

const RAPID_API_KEY = process.env.RAPID_API_KEY || ""

const base_url = "http://localhost:3004/recipes"

export async function POST(request: Request) {
  const { query } = await request.json()

  const response = await fetch(`${base_url}?name=${query}`, {
    method: "GET",
    headers: new Headers({
      "X-RapidAPI-Key": RAPID_API_KEY || "",
      "X-RapidAPI-Host": "low-carb-recipes.p.rapidapi.com",
    }),
  })

  const data = await response.json()

  return NextResponse.json(data)
}
