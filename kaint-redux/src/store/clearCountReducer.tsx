type defaultStateType = {
  clearCount: boolean
}
const defaultState: defaultStateType = {
    clearCount: false
}
type clearCanvasActionType = {
  type: typeof CLEAR_CANVAS,
}
const CLEAR_CANVAS = "CLEAR_CANVAS"

export const clearCountReducer = (state = defaultState, action:clearCanvasActionType):defaultStateType => {
    switch (action.type) {
  
      case CLEAR_CANVAS:
        return { ...state, clearCount: !(state.clearCount) }
  
      default:
        return state
    }
  }

export const clearCanvasAction = ():clearCanvasActionType  => ({type: CLEAR_CANVAS})