// app/api/items/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { errorHandler } from '@/app/middleware/errorHandler'; 
import { AppError } from '@/app/utils/CustomError';

export async function GET({ params }: { params: { id: string } }) {
  try {
    const itemId = parseInt(params.id);

    if (isNaN(itemId)) {
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
    return errorHandler(error); // Use the custom error handler
  }
}
