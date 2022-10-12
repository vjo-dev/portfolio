import { createSlice } from '@reduxjs/toolkit'
import projects from '../../../assets/data/projects';

const initialState = {
	categories: [
		{"id": 1, "name": "woodworking"},
		{"id": 2, "name": "tech"},
	],
	projects: projects
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
})

export default projectsSlice.reducer
