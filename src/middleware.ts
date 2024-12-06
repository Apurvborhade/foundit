import { NextResponse } from 'next/server';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Create an in-memory rate limiter
const rateLimiter = new RateLimiterMemory({
    points: 10, // 10 requests
    duration: 60, // Per 60 seconds
});

export async function middleware(request: Request) {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('remote-addr') || 'unknown';
    console.log("Rate Limiter")
    try {
        await rateLimiter.consume(ip); // Consume 1 point for the request
        return NextResponse.next(); // Allow the request
    } catch (rateLimiterRes) {
        // Respond with 429 if rate limit is exceeded
        return NextResponse.json(
            {
                success: false,
                message: 'Too many requests. Please try again later.',
            },
            { status: 429 }
        );
    }
}

// Match the API routes where the middleware should apply
export const config = {
    matcher: '/api/items', // Apply to all API routes
};
