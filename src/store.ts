import { configureStore } from '@reduxjs/toolkit'
import { ADD_TODO, DEL_TODO, Todo, TodoActionTypes } from './types'
import { UUID } from './utils'

const initialState: Todo[] = []

export const addTodoAction = (payload: string) => ({ type: ADD_TODO, payload })
export const delTodoAction = (payload: string) => ({ type: DEL_TODO, payload })

function todoReducer(state = initialState, action: TodoActionTypes) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: UUID(),
          bodyText: action.payload,
          completed: false,
        },
      ]
    default:
      return state
  }
}

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
})

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch