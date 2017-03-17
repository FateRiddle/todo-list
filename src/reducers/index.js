import { combineReducers } from 'redux'
import todos, * as fromTodos from './todos'

const app = combineReducers({
  todos,
})

export default app

export const getFilteredTodos = (state,filter) => {
  return fromTodos.getFilteredTodos(state.todos,filter)
}
