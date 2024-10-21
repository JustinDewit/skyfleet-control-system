import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const droneName = "Mavic Air 2";
  return NextResponse.json({ name: droneName });
}

