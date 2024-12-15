// app/api/items/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { errorHandler } from '@/app/middleware/errorHandler';
import { AppError } from '@/app/utils/CustomError';

export async function GET(
  request: Request,
  { params }: { params: Promise<{slug:string}>}
) {
  try {
    const itemId = (await params).slug;

    if (itemId) {
      throw new AppError('Invalid item ID', 400);
    }

    const item = await prisma.item.findUnique({
      where: { id: itemId },
    });

    if (!item) {
      throw new AppError('Item not found', 404);
    }

    return NextResponse.json(item, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return errorHandler(error); // Safe to pass as Error
    } else {
      // Handle unknown error case (optional)
      return errorHandler(new Error('Unknown error occurred'));
    }
  }
}
