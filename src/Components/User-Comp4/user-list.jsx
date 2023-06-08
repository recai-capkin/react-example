import React, { useState } from 'react'
import Useritem from './user-item'
 const Userlist = (props) =>  {
  const [users,setUsers] = useState(props.user.map((user) => {
    return{...user, isShow:false}
 }))

    function emailHandle(env,email){
      console.log(email);
      console.log(env);
      let newUser = users.map((u) => {
        if (u.email === email){
          return {...u, isShow: !u.isShow}
        }
       return u
      })
      setUsers(newUser)
    }
  return (
    <ul>
        {users.map((item) => (
            <>
            
              <Useritem name={item.name} email={item.email} isShow={item.isShow} id={item.id} eventHandler={(value) =>emailHandle(value,item.email)}></Useritem>
            </>
        ))}
    </ul>
  )
}
export default Userlist