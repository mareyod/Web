 type defaultStateType = {
  size: number
}
type changeSizeActionType = {
  type: typeof CHANGE_SIZE,
  size: number
}

const defaultState: defaultStateType = {
    size: 0
}

const CHANGE_SIZE = "CHANGE_SIZE"
export const sizeReducer = (state = defaultState, action:changeSizeActionType): defaultStateType => {
    switch (action.type) {
  
      case CHANGE_SIZE:
        if (action.size < 15 && action.size >=0)
          return { ...state, size: action.size }
        return { ...state}

      default:
        return state
    }
  }

export const changeSizeAction = (size: number):changeSizeActionType => ({type: CHANGE_SIZE, size})