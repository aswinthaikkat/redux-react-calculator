import { combineReducers } from 'redux';
import evaluateActionReducer from './evaluateActionReducer';
import expressionActionReducer from './expressionActionReducer';
export default combineReducers({
  evaluate: evaluateActionReducer,
  express: expressionActionReducer,
});
