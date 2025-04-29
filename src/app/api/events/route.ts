import { NextRequest, NextResponse } from "next/server";
import { ApiHeaders, ApiSearchParams, EVENT_TYPE, Event } from "../../../types";
import { events } from "../../../db";

export async function POST(req: Request) {
  const shopIdHeader = req.headers.get(ApiHeaders.SHOP_ID) as string;
  const { payload, type } = await req.json();

  events.push({
    shopId: shopIdHeader,
    payload,
    type,
  });

  return NextResponse.json({ success: true });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const shopId = searchParams.get(ApiSearchParams.SHOP_ID);
  const data = events.filter(
    ({ shopId: currentShopId }) => currentShopId === shopId
  );
  return NextResponse.json(data);
}
