import { createSlice } from "@reduxjs/toolkit";

const sellingSlice = createSlice({
    name: "selling",
    initialState: {
        newArrival: [],
        topselling: [],
        loading: "true",
    },
    reducers: {
        addselling: (state, action) => {
            state.newArrival = action.payload.newArrival;
            state.topselling = action.payload.topselling;
            state.loading = action.payload.loading;
        },
    },
});

export const { addselling } = sellingSlice.actions;
export default sellingSlice.reducer;