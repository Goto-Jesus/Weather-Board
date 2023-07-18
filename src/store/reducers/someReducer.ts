/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const someStateSlice = createSlice({
  name: 'someState',
  initialState: 0,
  reducers: {
    add: (value: number, action: PayloadAction<number>) => (value += action.payload),
    take: (value: number, action: PayloadAction<number>) => (value -= action.payload),
    clear: () => 0,
  },
});

export default someStateSlice.reducer;
export const { actions } = someStateSlice;
