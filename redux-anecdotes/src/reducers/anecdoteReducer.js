
import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState:[],
  reducers: {
    voteAnecdote (state, action){
      const id = action.payload.id
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : action.payload
      )
    },
    appendAnecdote (state, action) {
      state.push(action.payload)
    },
    setAnecdote (state, action) {
      return action.payload
    }
  },
})


export const { voteAnecdote, appendAnecdote, setAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdote(anecdotes))
  }
}

export const voteObject = anecdote => {
  return async dispatch => {
    const changedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const likedAnecdote = await anecdoteService.voteOne(changedAnecdote)
    dispatch(voteAnecdote(likedAnecdote))
  }
}

export const asObject = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export default anecdoteSlice.reducer