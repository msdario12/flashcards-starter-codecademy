import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {addQuizId} from '../topics/topicsSlice'
// Create a action creator that returns a thunk

export const createQuiz = (payload) => {
    return (dispatch) => {
        dispatch(addQuizId({quizId: payload.id,
                            topicId: payload.topicId,}));
        dispatch(quizzesSlice.actions.addQuiz(payload));
    }
}

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload
        }
    },
})

export default quizzesSlice.reducer;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export const {addQuiz} = quizzesSlice.actions.addQuiz;