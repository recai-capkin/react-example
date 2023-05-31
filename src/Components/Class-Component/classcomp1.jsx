import React, { Component } from 'react'

export class Classcomp1 extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>{this.props.data}</div>
    )
  }
}
export default Classcomp1