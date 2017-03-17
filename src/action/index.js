import { v4 } from 'uuid'
import * as api from '../api'

export const addTodo = (title) => ({
  type: 'ADD_TODO',
  title,
  id: v4(),
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
})

export const receiveTodos = (filter,todos) => ({
  type: 'RECEIVE_TODOS',
  todos,
  filter,
})

export const fetchTodos = filter =>
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter,response)
  )
