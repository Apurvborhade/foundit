import { configureStore } from "@reduxjs/toolkit";
import { itemApi } from "./services/itemApi";
import itemReducer from '@/app/features/itemSlice'
export const store = configureStore({
    reducer: {
        [itemApi.reducerPath]: itemApi.reducer,
        items: itemReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;