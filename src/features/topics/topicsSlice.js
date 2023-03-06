import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
    name: 'topic',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {...action.payload, quizIds: []};
        },
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }    
    },
})

export const addTopic = topicSlice.actions.addTopic
export const addQuizId = topicSlice.actions.addQuizId
export const selectTopics = (state) => state.topic.topics;
export default topicSlice.reducer;
