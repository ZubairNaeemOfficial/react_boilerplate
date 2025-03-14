import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export let fetchUser = createAsyncThunk("data/fetchUser", async () => {
    let response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
    }
);

let initialState = {
    posts: [],
    status: null,
    error: null
};

let dataSlice = createSlice({
    name : "data",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.status = "loading";
        }
        );
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.status = "success";
        }
        );
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
        );
    }
    });

export default dataSlice.reducer;

