import { createSlice } from '@reduxjs/toolkit'
import projects from '../../../assets/data/projects';

const getCategoryChoices = projects => {
    let arrCategories = ["All"];
    projects.forEach(project => {
            if (arrCategories.indexOf(project.category) === -1) {
                      arrCategories.push(project.category);
                    }
          });
    return arrCategories.sort()
}

const initialState = {
    projects,
    category: "All",
    categories: getCategoryChoices(projects)
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setCategory(state, action) {
            const activeCategory = action.payload
            state.category = activeCategory
            if (activeCategory === 'All') {
                state.projects = projects
            } else {
                state.projects = projects.filter(project => project.category === activeCategory)
            }
        },
    },
})

export const { setCategory } = projectsSlice.actions

export default projectsSlice.reducer

