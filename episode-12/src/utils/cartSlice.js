import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // RTK - either Mutate the existing state or return a new state
            state.items.length = 0; // []
            // or return { items: [] };
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;