import React from 'react'
    // Birden Fazla component aynı yerden böyle çağrılır
 const CustomComp2 = () => {
  return (
    <div>Burası custom comp2</div>
  )
}
const CustomComp1 = () => {
    return (
      <div>Burası custom comp1</div>
    )
  }

export {CustomComp1,CustomComp2}