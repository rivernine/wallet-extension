import { createSlice } from '@reduxjs/toolkit'

export const ethereumSlice = createSlice({
  name: 'ethereum',
  initialState: {
    balance: 0,
  },
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload;
    }
  },
})

export const { setBalance } = ethereumSlice.actions

export default ethereumSlice.reducer