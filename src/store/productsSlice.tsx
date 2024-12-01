import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
});

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: { rate: number; count: number };
}

interface ProductState {
    products: Product[];
    searchQuery: string;
}

const initialState: ProductState = {
    products: [],
    searchQuery: '',
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
    },
});

export const { setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;
