const defaultState = {
    clearCount: 0
}

const CLEAR_CANVAS = "CLEAR_CANVAS"

export const clearCountReducer = (state = defaultState, action) => {
    switch (action.type) {
  
      case CLEAR_CANVAS:
        return { ...state, clearCount: !(state.clearCount) }
  
      default:
        return state
    }
  }

export const clearCanvasAction = () => ({type: CLEAR_CANVAS})