import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from '../features/projects/redux/projectsSlice';
import themeReducer from '../features/theme/redux/themeSlice';

export const store = configureStore({
  reducer: {
	  projects: projectsReducer,
	  theme: themeReducer,
  },
});
