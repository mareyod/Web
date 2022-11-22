const defaultState = {
    size: 0
}

const CHANGE_SIZE = "CHANGE_SIZE"
export const sizeReducer = (state = defaultState, action) => {
    switch (action.type) {
  
      case CHANGE_SIZE:
        if (action.size < 15)
          return { ...state, size: action.size }
  
      default:
        return state
    }
  }

  export const changeSizeAction = (size) => ({type: CHANGE_SIZE, size})