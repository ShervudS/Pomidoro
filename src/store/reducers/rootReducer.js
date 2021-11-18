import { combineReducers } from 'redux';

// redusers
import todosReduser from './todos';

export default combineReducers({
    todoListData: todosReduser,
});
