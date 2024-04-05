import { createReducer, on } from "@ngrx/store";
import { ADD_POKEMON } from "./current-party.actions";

export const initialState = 0

export const partyReducer = createReducer(
  initialState,
  on(ADD_POKEMON, (state) => state + 1)
)