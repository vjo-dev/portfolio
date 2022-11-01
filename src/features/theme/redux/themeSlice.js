import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDarkMode: true,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeUpdated: state => {
            state.isDarkMode = !state.isDarkMode
        },
    },
})

export const { themeUpdated } = themeSlice.actions

export default themeSlice.reducer
