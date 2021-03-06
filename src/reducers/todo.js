const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id:action.id,
        title:action.title,
        completed:false,
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        completed:!state.completed,
      }
    default:
      return state
  }
}

export default todo
