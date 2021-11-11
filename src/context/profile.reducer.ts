import { State, Action } from "../interfaces/commonTypes";
import { profileTypes } from "./profile.types";

function ProfileReducer(state: State, action: Action): State {
  switch (action.type) {
    case profileTypes.PROFILE:
      return {
        ...state,
        error: null,
        loading: false,
        profile: action.payload,
      };
    case profileTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case profileTypes.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default ProfileReducer;
