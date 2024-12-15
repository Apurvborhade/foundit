// app/api/items/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { errorHandler } from '@/app/middleware/errorHandler';
import { AppError } from '@/app/utils/CustomError';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log('Raw Body:', body); // Debugging

        // Validate payload structure
        if (!body || typeof body !== 'object') {
            throw new AppError('Invalid JSON payload', 400);
        }
        const { name, description, location, date, contactInfo, category, status } = body
        // Basic validation
        if (!name || !description || !contactInfo) {
            throw new AppError('Missing required fields', 400);
        }

        const newItem = await prisma.item.create({
            data: {
                name,
                description,
                location,
                date,
                contactInfo,
                category,
                status,
            },
        });

        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        if (error instanceof Error) {
            return errorHandler(error); // Safe to pass as Error
        } else {
            // Handle unknown error case (optional)
            return errorHandler(new Error('Unknown error occurred'));
        }
    }
}

export async function GET() {
    try {
        const items = await prisma.item.findMany(
            {
                select: {
                    id: true,
                    name: true,
                    description: true,
                    location: true,
                    date: true,
                    contactInfo: true,
                    status: true,
                    category: true,
                    createdAt: true, // Include createdAt
                    updatedAt: true, // Include updatedAt
                },
            }
        );

        if (items.length === 0) {
            throw new AppError('No items found', 404);
        }

        return NextResponse.json(items, { status: 200 });
    } catch (error) {

        if (error instanceof Error) {
            return errorHandler(error); // Safe to pass as Error
        } else {
            // Handle unknown error case (optional)
            return errorHandler(new Error('Unknown error occurred'));
        }
    }
}