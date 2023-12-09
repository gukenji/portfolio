import { createSlice } from '@reduxjs/toolkit'
export const pageState = createSlice({
  name: 'page',
  initialState: {
    value: null
  },
  reducers: {
    changePage: (state, action) => {
      state.value = action.payload
      console.log(state)
      console.log(action)
    }
  }
})

// Action creators are generated for each case reducer function
export const { changePage } = pageState.actions

export default pageState.reducer
