import { createSlice } from '@reduxjs/toolkit';
import { Course } from '../types';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: [] as Course[],
  reducers: {
    setCourses(state, action) {
      const courses = action.payload;
      return courses;
    }
  }
});

export const { setCourses } = coursesSlice.actions;

export default coursesSlice.reducer;