import { useDispatch }   from 'react-redux'
import { voteObject } from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'


const AnecdoteLike = (props) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(voteObject(props.anecdote))
  }
  return(
    <div>
      <p> has {props.anecdote.votes} <button onClick={handleClick}>like</button></p>
    </div>
  )
}

AnecdoteLike.propTypes = {
  anecdote: PropTypes.shape({
    content: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
  }).isRequired
}


export default AnecdoteLike