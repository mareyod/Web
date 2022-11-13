const defaultState = {
    backgroundColor: 'white'
}

const CHANGE_COLOR = "CHANGE_COLOR"

export const backgroundColorReducer = (state = defaultState, action) => {
    switch (action.type) {

      case CHANGE_COLOR:
        return { ...state, backgroundColor: action.color }

      default:
        return state
    }
  }

 export const changeColorAction = (color) => ({type :CHANGE_COLOR, color})