import { createSlice } from "@reduxjs/toolkit";

//Sayac icin baslangic state i
const initialState = {
    value: 10,
  };
  
  //Sayac icin bir Slice tanimlama
  const counterSlice = createSlice({
    name: "counter", //Slice in adi
    initialState, //Baslangic state i
    reducers: {
      increment: (state) => {
        state.value += 1; //state.value = state.value + 1;
      },
      decrement: (state) => {
        state.value -= 1; //state.value = state.value - 1;
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload;
      },
    },
  });
  //Slice in action larini ve reducer ini export et
  export const { actions, reducer } = counterSlice; //counterSlice.actions, counterSlice.reducer
  export const { increment, decrement, incrementByAmount } = actions; //actions.increment, actions.decrement, actions.incrementByAmount
