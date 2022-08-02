import { configureStore } from '@reduxjs/toolkit'
import ethereumSlice from './slice/ethereumSlice'

export default configureStore({
  reducer: {
    ethereum: ethereumSlice,
  },
})