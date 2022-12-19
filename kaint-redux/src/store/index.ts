import { createStore, combineReducers } from 'redux';
import { backgroundColorReducer } from './backgroundColorReducer';
import { clearCountReducer } from './clearCountReducer';
import { drawPermissionReducer } from './drawPermissionReducer';
import { sizeReducer } from './sizeReducer';

const rootReducer = combineReducers( {
    backgroundColorReducer,
    clearCountReducer,
    drawPermissionReducer,
    sizeReducer
})

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;