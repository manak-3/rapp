export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (text, endDate) => ({
  type: CREATE_TODO,
  payload: { text, endDate }
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
  type: REMOVE_TODO,
  payload: { text }
});
