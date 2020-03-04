import {Action, Dispatch} from 'redux';
import {Project} from '../../models/Project';
import {projectsService} from '../../services/ProjectsService';

export enum HomeActionType {
  FETCH_PROJECTS = 'FETCH_PROJECTS',
  FETCH_PROJECTS_ERROR = 'FETCH_PROJECTS_ERROR',
  RESET_PROJECTS = 'RESET_PROJECTS'
}

export interface HomeAction extends Action {
  type: HomeActionType;
  payload: Project[];
}

export const fetchProjects: any = () => {
  return (dispatch: Dispatch) => {
    projectsService.fetchProjects()
    .then((response: any) => {
      dispatch({ type: HomeActionType.FETCH_PROJECTS, payload: response });
    })
    .catch(error => {
      dispatch({ type: HomeActionType.FETCH_PROJECTS_ERROR, payload: error });
    });
  };
};

export const resetProjects: any = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: HomeActionType.RESET_PROJECTS, payload: [] });
  };
};
