import React from 'react'
import Useritem from './user-item'
 const userlist = (props) =>  {
    const users = props.user
  return (
    <ul>
        {users.map((item) => (
            <>
                <Useritem data={item}>{item.name}</Useritem>
            </>
        ))}
    </ul>
  )
}
export default userlist