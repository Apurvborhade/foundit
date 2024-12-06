import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        getItems: (state, action) => {
            console.log(action)
            return action.payload
        }
    }
})
export const { getItems } = itemSlice.actions
export default itemSlice.reducer