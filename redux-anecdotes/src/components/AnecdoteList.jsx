import AnecdoteLike from './AnecdoteLike'
import { useSelector } from 'react-redux'

const AnecdoteList = () => {

  const anecdotes  = useSelector(({anecdotes, filter}) => {
    if (filter === 'ALL' || filter === '') {
      return anecdotes
    }
    return anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )}
  )

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

  console.log(anecdotes)
  return(
    <div>
      <ul>
        {sortedAnecdotes.map(anecdote => (
          <li key={anecdote.id}>
            <div>{anecdote.content}</div>
            <AnecdoteLike anecdote={anecdote} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnecdoteList