import { useSelector } from 'react-redux'

export const Notification = () => {
  const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notification === null) {
    return null
  }

  return (
    <div style={style}>
      {notification  && <div>{notification}</div>}
    </div>
  )
}

export default Notification