import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    object: {
        clothesId: null,
        isActive: false,
    }
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        openItem(state, action) {
            state.object.clothesId = action.payload
        }
    }
})

export default itemSlice.reducer