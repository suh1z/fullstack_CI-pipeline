import { test } from 'vitest'
import reducer, { appendAnecdote, initializeAnecdotes, voteAnecdote } from './anecdoteReducer'
import { filterChange } from './filterReducer'

const testAnecdote = {
    "id": 1,
    "content": "abcd",
    "votes": 0
}

test('initial state', () => {
  const previousState = []
  expect(reducer(previousState, initializeAnecdotes(testAnecdote))).toEqual([])
})

test('anecdote added', () => {
  const previousState = []
  expect(reducer(previousState, appendAnecdote(testAnecdote))).toEqual([
        testAnecdote
  ])
})

test('voteAnecdote works', () => {
    const previousState = [
      { id: 1, content: 'abcd', votes: 0 }
    ]
    expect(reducer(previousState, voteAnecdote(testAnecdote))).toEqual([
        testAnecdote
  ])
})

test('filter changes', () => {
    const filter = filterChange("abc")
    expect(filter.payload).toEqual("abc")
  })
  