type defaultStateType = {
  drawPermission: boolean
}
const defaultState: defaultStateType = {
    drawPermission: false
}
type changeDrawPermissionActionType = {
  type: typeof CHANGE_DRAWPERMISSION,
  drawPermission: boolean
}
const CHANGE_DRAWPERMISSION = "CHANGE_DRAWPERMISSION"

export const drawPermissionReducer = (state = defaultState, action:changeDrawPermissionActionType):defaultStateType => {
    switch (action.type) {
  
      case CHANGE_DRAWPERMISSION:
        return { ...state, drawPermission: action.drawPermission }
  
      default:
        return state
    }
  }

  export const changeDrawPermissionAction = (drawPermission: boolean) => ({type: CHANGE_DRAWPERMISSION, drawPermission})