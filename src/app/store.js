import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSlice.js'
import quizzesReducer from "../features/quizzes/quizzesSlice.js";
import cardsReducer from '../features/cards/cardsSlice'

export default configureStore({
  reducer: {
    topic: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer,
  },
  
});
