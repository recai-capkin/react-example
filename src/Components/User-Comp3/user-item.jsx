import React,{useState} from 'react'
import "../../../src/App.css"

const Useritem = (props) => {
    const newData = props.data
    const [isShow,SetisShow] = useState(false);
    function mailClicked()
    {
      SetisShow(!isShow)
    }
  return (
    <>
    <h6 onClick={mailClicked}>{newData.email}</h6>
    {isShow ? <li className='itemlist' key={newData.id}>{newData.name}</li> : null}
    </>
  )
}
export default Useritem