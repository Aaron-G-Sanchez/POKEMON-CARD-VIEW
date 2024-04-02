import { createReducer, on } from "@ngrx/store";

export const initialState = ["Pikachu", "Jolteon"]

export const partyReducer = createReducer(
  initialState
)