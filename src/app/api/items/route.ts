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
        const { name, description, location,date, contactInfo,category, status } = body
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
        return errorHandler(error); // Use the custom error handler
    }
}

export async function GET() {
    try {
        const items = await prisma.item.findMany();

        if (items.length === 0) {
            throw new AppError('No items found', 404);
        }

        return NextResponse.json(items, { status: 200 });
    } catch (error) {
        return errorHandler(error); // Use the custom error handler
    }
}