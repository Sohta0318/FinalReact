import { createSlice } from "@reduxjs/toolkit";
import Sample from "../model/SampleData";

const initialState = {
  cards: Sample,
}

const slice = createSlice({
  name:'cards',
  initialState,
  reducers:{
    createCard:(state,action)=>{
      state.cards.push(action.payload)
    },
    updateCard:(state,action)=>{
      const card = state.cards.filter(card=>card.id===action.payload.id)
      card = action.payload
    },
    destroyCard:(state,action)=>{
      const resIndex = state.cards.findIndex(
        (res) => res.id === action.payload
      );
      state.cards.splice(resIndex, 1);
    }


  }

})

export default slice.reducer;

export const {createCard,updateCard,destroyCard} = slice.actions;