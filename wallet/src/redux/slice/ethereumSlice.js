import { createSlice } from '@reduxjs/toolkit'

export const ethereumSlice = createSlice({
  name: 'ethereum',
  initialState: {
    provider: null,
  },
  reducers: {
    setProvider: (state, action) => {
      state.provider = action.payload;
    }
  },
})

export const { setProvider } = ethereumSlice.actions

export default ethereumSlice.reducer