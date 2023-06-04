import React from 'react'
import "../../../src/App.css"

const useritem = (props) => {
    const newData = props.data
  return (
    <li className='itemlist' key={newData.id}>{newData.name}</li>
  )
}
export default useritem