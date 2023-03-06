import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
    name: 'topic',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.name] = {...action.payload, quizIds: []};
        }    
    },
})

export const {addTopic} = topicSlice.actions
export const selectTopics = (state) => state.topic.topics;
export default topicSlice.reducer;
