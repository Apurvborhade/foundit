import React from 'react'

const LoadingSkeleton = () => {
    return (
        <div className='grid grid-cols-3 grid-rows-1 gap-5'>
            <div className="w-full max-w-md p-6 bg-card text-card-foreground shadow-sm rounded-lg border animate-pulse">
                <div className="flex justify-between items-center mb-4">
                    <div className="h-6 bg-muted rounded w-1/3"></div>
                    <div className="flex items-center space-x-2">
                        <div className="h-4 bg-muted rounded w-16"></div>
                        <div className="h-5 w-9 bg-muted rounded-full"></div>
                    </div>
                </div>
                <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                <div className="flex justify-between items-center">
                    <div className="flex-1 space-y-2">
                        <div className="h-4 bg-muted rounded w-1/2"></div>
                        <div className="h-4 bg-muted rounded w-2/3"></div>
                    </div>
                    <div className="flex-1 space-y-2 text-right">
                        <div className="h-4 bg-muted rounded w-1/2 ml-auto"></div>
                        <div className="h-4 bg-muted rounded w-2/3 ml-auto"></div>
                    </div>
                </div>
                <div className="h-10 bg-muted rounded w-full mt-4"></div>
            </div>
            <div className="w-full max-w-md p-6 bg-card text-card-foreground shadow-sm rounded-lg border animate-pulse">
                <div className="flex justify-between items-center mb-4">
                    <div className="h-6 bg-muted rounded w-1/3"></div>
                    <div className="flex items-center space-x-2">
                        <div className="h-4 bg-muted rounded w-16"></div>
                        <div className="h-5 w-9 bg-muted rounded-full"></div>
                    </div>
                </div>
                <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                <div className="flex justify-between items-center">
                    <div className="flex-1 space-y-2">
                        <div className="h-4 bg-muted rounded w-1/2"></div>
                        <div className="h-4 bg-muted rounded w-2/3"></div>
                    </div>
                    <div className="flex-1 space-y-2 text-right">
                        <div className="h-4 bg-muted rounded w-1/2 ml-auto"></div>
                        <div className="h-4 bg-muted rounded w-2/3 ml-auto"></div>
                    </div>
                </div>
                <div className="h-10 bg-muted rounded w-full mt-4"></div>
            </div>
            <div className="w-full max-w-md p-6 bg-card text-card-foreground shadow-sm rounded-lg border animate-pulse">
                <div className="flex justify-between items-center mb-4">
                    <div className="h-6 bg-muted rounded w-1/3"></div>
                    <div className="flex items-center space-x-2">
                        <div className="h-4 bg-muted rounded w-16"></div>
                        <div className="h-5 w-9 bg-muted rounded-full"></div>
                    </div>
                </div>
                <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                <div className="flex justify-between items-center">
                    <div className="flex-1 space-y-2">
                        <div className="h-4 bg-muted rounded w-1/2"></div>
                        <div className="h-4 bg-muted rounded w-2/3"></div>
                    </div>
                    <div className="flex-1 space-y-2 text-right">
                        <div className="h-4 bg-muted rounded w-1/2 ml-auto"></div>
                        <div className="h-4 bg-muted rounded w-2/3 ml-auto"></div>
                    </div>
                </div>
                <div className="h-10 bg-muted rounded w-full mt-4"></div>
            </div>
        </div>
    )
}

export default LoadingSkeleton