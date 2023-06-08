import React,{useState} from 'react'
import "../../../src/App.css"

const Useritem = (props) => {
    const {name, email,isShow,eventHandler,id} = props


  return (
    <>
    <h6 onClick={(env) =>eventHandler(env,email)}>{name}</h6>
    {isShow ? <li className='itemlist' key={id}>{email}</li> : null}
    </>
  )
}
export default Useritem