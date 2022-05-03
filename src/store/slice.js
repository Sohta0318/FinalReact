import { createSlice } from "@reduxjs/toolkit";
import Sample from "../model/SampleData";

const initialState = {
  cards: Sample,
}

const slice = createSlice({
  name:'cards',
  initialState,
  reducers:{
    setCard:(state,action)=>{
      
    }
  }

})

export default slice.reducer;

export const { setCard} = slice.actions;