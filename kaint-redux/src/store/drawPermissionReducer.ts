type defaultStateType = {
  drawPermission: boolean
}

type changeDrawPermissionActionType = {
  type: typeof CHANGE_DRAWPERMISSION,
  drawPermission: boolean
}

const defaultState: defaultStateType = {
    drawPermission: false
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

  export const changeDrawPermissionAction = (drawPermission: boolean):changeDrawPermissionActionType => ({type: CHANGE_DRAWPERMISSION, drawPermission})