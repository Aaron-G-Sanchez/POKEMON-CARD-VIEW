import { createReducer, on } from "@ngrx/store";
import { ADD_POKEMON } from "./current-party.actions";

export const initialState: any[] = []

export const partyReducer = createReducer(
  initialState,
  on(ADD_POKEMON, (state, { pokemon }) => [...state, pokemon])
)