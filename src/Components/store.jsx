import { configureStore } from '@reduxjs/toolkit';
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import counterreducer from './slice'


//const middleware = [...getDefaultMiddleware(), thunk, logger];
const store = configureStore({
    reducer: {
        counterReducer: counterreducer,
      },
      middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(thunk, logger)
});
export default store