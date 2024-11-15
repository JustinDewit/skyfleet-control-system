import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.MAPTILER_API_KEY;
  const response = await fetch(`https://api.maptiler.com/maps//style.json?key=${apiKey}`);
  const data = await response.json();
  return NextResponse.json(data);
}

