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
    },
    idSort:(state,action)=>{
      state.cards = state.cards.sort((a,b)=>{
        if(a.id >b.id){
          return 1
        }else{
          return -1
        }
      })
    },
    titleSort:(state)=>{
      state.cards = state.cards.sort((a,b)=>{
        if(a.title >b.title){
          return 1
        }else{
          return -1
        }
      })
    },
    urlSort:(state)=>{
      state.cards = state.cards.sort((a,b)=>{
        if(a.url >b.url){
          return 1
        }else{
          return -1
        }
      })
    },
    createdAtSort:(state)=>{
      state.cards = state.cards.sort((a,b)=>{
        if(a.created_at >b.created_at){
          return 1
        }else{
          return -1
        }
      })
    },
    updatedAtSort:(state)=>{
      state.cards = state.cards.sort((a,b)=>{
        if(a.updated_at >b.updated_at){
          return 1
        }else{
          return -1
        }
      })
    },



  }

})

export default slice.reducer;

export const {createCard,updateCard,destroyCard,idSort,titleSort,urlSort,createdAtSort,updatedAtSort} = slice.actions;