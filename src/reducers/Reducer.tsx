import {Action, combineReducers} from 'redux';
import HomeReducer from '../containers/Home/HomeReducer';

const reducers: any = combineReducers<any, any>({
  homeReducer: HomeReducer
});

const reducer: any = (state: any, action: Action) => {
  return reducers(state, action);
};

export default reducer;
