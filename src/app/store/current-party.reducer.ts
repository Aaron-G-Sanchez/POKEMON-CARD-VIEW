import { createReducer, on } from "@ngrx/store";
import { ADD_POKEMON } from "./current-party.actions";

// TODO Once pokemon type is written change the any to the new type.
export const initialState: any[] = []

export const partyReducer = createReducer(
  initialState,
  on(ADD_POKEMON, (state, { pokemon }) => [...state, pokemon])
)