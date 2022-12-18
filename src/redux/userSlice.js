import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: "wish",
    initialState: {
        length: 0,
        data: [],
    },
    reducers: {
        addWish: (state, action) => {
            state.length = action.payload.length;
            state.data = action.payload.data;
        },
    },
});

export const { addWish } = wishSlice.actions;
export default wishSlice.reducer;