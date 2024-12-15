import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type Item = {
    id: string; // id is a string in the schema
    name: string;
    description: string;
    location: string | null;
    date: string | null;
    contactInfo: string;
    status: 'LOST' | 'FOUND' | 'RESOLVED';
    category: string;
    createdAt: string;
    updatedAt: string;
};
interface ItemsState {
    items: Item[];
}
// Initial state
const initialState: ItemsState = {
    items: []
};
const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        getItems: (state, action: PayloadAction<Item[]>) => {
            state.items = action.payload
        }
    }
})
export const { getItems } = itemSlice.actions
export default itemSlice.reducer