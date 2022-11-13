import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  clearCount: 0,
  size: 0,
  backgroundColor: 'white',
  drawPermission: 0
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {

    case "CLEAR_CANVAS":
      return { ...state, clearCount: !(state.clearCount) }

    case "CHANGE_SIZE":
      if (action.size < 15)
        return { ...state, size: action.size }

    case "CHANGE_COLOR":
      return { ...state, backgroundColor: action.color }

    case "CHANGE_DRAWPERMISSION":
      return { ...state, drawPermission: action.drawPermission }


    default:
      return state
  }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);