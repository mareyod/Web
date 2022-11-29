import { createStore, combineReducers } from 'redux';
import { backgroundColorReducer } from './backgroundColorReducer.tsx';
import { clearCountReducer } from './clearCountReducer.tsx';
import { drawPermissionReducer } from './drawPermissionReducer.tsx';
import { sizeReducer } from './sizeReducer.tsx';

const rootReducer = combineReducers( {
    backgroundColorReducer,
    clearCountReducer,
    drawPermissionReducer,
    sizeReducer
})

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;