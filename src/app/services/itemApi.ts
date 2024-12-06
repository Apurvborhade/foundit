import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { json } from 'stream/consumers';

// Define API error structure
interface ErrorStruct {
    status: string;
    data: {
        message: string;
        success: boolean;
    };
}

// Define Item type
interface Item {
    id: string;
    name: string;
    description: string;
    location?: string;
    contactInfo: string;
    status: string;
    category:string,
    date?: string;
}

// Define CreateItemPayload type
interface CreateItemPayload {
    name: string;
    description: string;
    location?: string;
    contactInfo: string;
    status: string;
    category:string,
    date?: string;
}

// Define CreateItemResponse type
interface CreateItemResponse {
    success: boolean;
    data: Item;
}

// Define API
export const itemApi = createApi({
    reducerPath: 'itemApi',
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }) as BaseQueryFn<string | FetchArgs, unknown, ErrorStruct, {}>,
    tagTypes: ["Item"],
    endpoints: (builder) => ({
        fetchItems: builder.query<Array<Item>, void>({
            query: () => ({
                url: "/items",
                method: "GET",
            }),
            providesTags: ['Item'],
        }),
        createItem: builder.mutation<CreateItemResponse, CreateItemPayload>({
            query: (item) => {
                const date = new Date(item.date as string).toISOString()
                return {
                    url: `/items`,
                    method: "POST",
                    body: {
                        name: item.name,
                        description: item.description,
                        location: item.location,
                        date,
                        category:item.category,
                        contactInfo: item.contactInfo,
                        status: item.status
                    },
                };
            },
            invalidatesTags: ['Item'], // Ensures cache invalidation
        }),
    }),
});

export const { useFetchItemsQuery, useCreateItemMutation } = itemApi;
