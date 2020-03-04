import {Project} from '../../models/Project';
import {HomeAction, HomeActionType} from './HomeAction';

export interface InitialState {
  projects: Project[] | null;
}

const initialState: InitialState = {
  projects: []
};

export default (state = initialState, action: HomeAction) => {
  switch (action.type) {
    case HomeActionType.FETCH_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case HomeActionType.FETCH_PROJECTS_ERROR:
      return {
        ...state,
        projectsError: action.payload
      };
    case HomeActionType.RESET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
};
