import { createAction, props } from "@ngrx/store";

export const ADD_POKEMON = createAction(
  '[Card Display Component] Add Pokemon to current team',
  props<{ pokemon: any}>()
)