import React from 'react'

const useritem = (props) => {
    const newData = props.data
  return (
    <li key={newData.id}>{props.children}</li>
  )
}
export default useritem