import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numbers: [1, 2, 3, 4, 5],
}

const numbersSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {},
})

export default numbersSlice.reducer
