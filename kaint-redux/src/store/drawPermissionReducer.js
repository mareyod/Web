const defaultState = {
    drawPermission: 0
}

const CHANGE_DRAWPERMISSION = "CHANGE_DRAWPERMISSION"

export const drawPermissionReducer = (state = defaultState, action) => {
    switch (action.type) {
  
      case CHANGE_DRAWPERMISSION:
        return { ...state, drawPermission: action.drawPermission }
  
      default:
        return state
    }
  }

  export const changeDrawPermissionAction = (drawPermission) => ({type: CHANGE_DRAWPERMISSION, drawPermission})