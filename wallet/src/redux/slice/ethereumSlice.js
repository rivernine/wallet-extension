import { createSlice } from '@reduxjs/toolkit'

export const ethereumSlice = createSlice({
  name: 'ethereum',
  initialState: {
    address: null,
    balance: 0,
    polling: false,
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setPolling: (state, action) => {
      state.polling = action.payload;
    }
  },
})

export const {
  setBalance,
  setPolling,
  setAddress
} = ethereumSlice.actions

export default ethereumSlice.reducer