import React,{useState} from 'react'
import Useritem from './user-item'
 const Userlist = (props) =>  {
    const users = props.user
    
  return (
    <ul>
        {users.map((item) => (
            <>
              
              <Useritem data={item}></Useritem>
            </>
        ))}
    </ul>
  )
}
export default Userlist