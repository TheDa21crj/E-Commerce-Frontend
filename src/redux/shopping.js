import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        length: 0,
        data: [],
    },
    reducers: {
        addshop: (state, action) => {
            state.length = action.payload.length;
            state.data = action.payload.data;
        },
    },
});

export const { addWish } = shopSlice.actions;
export default shopSlice.reducer;