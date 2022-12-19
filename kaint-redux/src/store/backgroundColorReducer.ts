export type defaultStateType = {
  backgroundColor: string
}
const defaultState: defaultStateType = {
    backgroundColor: 'white'
}

const CHANGE_COLOR = "CHANGE_COLOR"
type changeColorActionType = {
  type: typeof CHANGE_COLOR,
  color: string
}

export const backgroundColorReducer = (state = defaultState, action:changeColorActionType): defaultStateType => {
    switch (action.type) {

      case CHANGE_COLOR:
        return { ...state, backgroundColor: action.color }

      default:
        return state
    }
  }



export const changeColorAction = (color: string): changeColorActionType => ({type: CHANGE_COLOR, color});