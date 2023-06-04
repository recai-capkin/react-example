import React,{useState} from 'react'
import Useritem from './user-item'
 const Userlist = (props) =>  {
    const users = props.user
    const [isShow,SetisShow] = useState(false);
    function mailClicked()
    {
      SetisShow(!isShow)
    }
  return (
    <ul>
        {users.map((item) => (
            <>
              <h6 onClick={mailClicked}>{item.email}</h6>
              {isShow ? null:<Useritem data={item}></Useritem>}  
            </>
        ))}
    </ul>
  )
}
export default Userlist