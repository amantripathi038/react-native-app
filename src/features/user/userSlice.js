import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    loading: false,
    token: ""
}

const reducers = {
    loginUser: (state, action) => {
        const data = action.payload
        state.user = data.user
        state.token = data.token
    },
    logoutUser: (state, action) => {
        state.user = {}
        state.token = ""
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers
})

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;