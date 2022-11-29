 type defaultStateType = {
  size: number
}
const defaultState: defaultStateType = {
    size: 0
}
type changeSizeActionType = {
  type: typeof CHANGE_SIZE,
  size: number
}
const CHANGE_SIZE = "CHANGE_SIZE"
export const sizeReducer = (state = defaultState, action:changeSizeActionType): defaultStateType => {
    switch (action.type) {
  
      case CHANGE_SIZE:
        if (action.size < 15)
          return { ...state, size: action.size }
  
      default:
        return state
    }
  }

export const changeSizeAction = (size: number) => ({type: CHANGE_SIZE, size})