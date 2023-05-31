import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CustomComp2,CustomComp1} from './Components/Function-Component/functioncomp1'
import Classcomp1 from './Components/Class-Component/classcomp1';
const App = () => {
  return (
    <>
      <CustomComp1/>
      <CustomComp2></CustomComp2>
      <Classcomp1 data="Buraya data geliyor"></Classcomp1>
      </>
      
  );
}

export default App;
