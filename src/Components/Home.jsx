import React from 'react';

import {CustomComp2,CustomComp1} from './Function-Component/functioncomp1'
import Classcomp1 from './Class-Component/classcomp1';
import UserData from '../Data/data.json'
import Userlist from './User-Comp/user-list';
import Userlist2 from  './User-Comp2/user-list'
import Userlist3 from  './User-Comp3/user-list'
import Userlist4 from './User-Comp4/user-list'
import Userlist5 from './User-Comp5/form'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      
    <>
     <h1>Welcome to the Home Page</h1>
      <Link to="/product-brands">Go to Product Brands</Link>
     <CustomComp1/>
      <CustomComp2></CustomComp2>
      <Classcomp1 data="Buraya data geliyor"></Classcomp1> 
      <Userlist user={UserData }/>
       < Userlist2 user={UserData }/>
      <Userlist3 user={UserData }></Userlist3> 
       <Userlist4 user={UserData}></Userlist4> 

      <Userlist5></Userlist5> 
         <ul>
        {UserData.map((user) => (
          <>
          <li key={user._id}>{user.name}</li>
          </>
        ))}
      </ul>
      </>
  );
};

export default Home;
