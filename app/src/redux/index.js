import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
    waves: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },

        setWaves: (state, action) => {
            state.waves = action.payload;
        },
        addWaveToCart : (state, action) => {
         state.waves = [...state.cart, action.payload.wave];
        },

        removeWaveFromCart  : (state, action) => {
            state.waves = state.waves.filter(wave => wave.id !== action.payload.id);
        }, 

        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload.item];
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },

        increaseCount: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    item.count++;
                }
                return item;
            });
        },

        decreaseCount: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload.id && item.count > 1) {
                    item.count--;
                }
                return item;
            });
        },

        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },

    }
});







export const { 
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
    setWaves,
    addWaveToCart,
    removeWaveFromCart,
} = cartSlice.actions;


export default cartSlice.reducer;