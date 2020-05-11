import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import wizardReducer from "../wizard/wizardSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    wizard: wizardReducer,
  },
});
