import { createSlice } from "@reduxjs/toolkit";

export const wizardSlice = createSlice({
  name: "wizard",
  initialState: {
    current_step: 0,
    can_advance: false,
  },
  reducers: {
    nextPage: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.can_advance) {
        state.current_step += 1;
      }
    },
    previousPage: (state) => {
      if (state.can_advance) {
        state.current_step -= 1;
      }
    },
    cantAdvance: (state) => {
      state.can_advance = false;
    },
    canAdvance: (state) => {
      console.log("Advance now");
      state.can_advance = true;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const {
  nextPage,
  previousPage,
  canAdvance,
  cantAdvance,
} = wizardSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectCurrentStep = (state) => state.wizard.current_step;
export const selectCanAdvance = (state) => state.wizard.can_advance;

export default wizardSlice.reducer;
