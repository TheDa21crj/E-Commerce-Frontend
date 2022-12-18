import { createSlice } from "@reduxjs/toolkit";

const loadSlice = createSlice({
    name: "load",
    initialState: {
        start: "true",
    },
    reducers: {
        seeload: (state, action) => {
            state.start = action.payload.start;
        },
    },
});

export const { seeload } = loadSlice.actions;
export default loadSlice.reducer;