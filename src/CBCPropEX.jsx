import React, { Component } from 'react'

export default class CBCpropEX extends Component {
  render() {
    console.log(this)
    return (
      <div>CBCPropEX

        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        {
          this.props.hobbies.map(hobby=>{
            return <li>{hobby}</li>
          })
        }

        <h1>{this.props.address.city}</h1>
        <button onClick={this.props.sendFun}>click</button>
     </div>
    )
  }
}