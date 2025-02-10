import React from 'react'
import "./Styles.css"
 function FunctionalComponent(props) {
    console.log(props);
    let applyStyle=props.apply ? 'heading':' '
    let inlineStyle={
        color:'green',
        backgroundColor:'red',
        fontSize:'50px'
    }
  return (
    <div>
      <h1 class={${applyStyle}font-size}>Welcome Mru </h1>
      <h2 style={inlineStyle}>Good Afternoon</h2>
    </div>
  )
}
export default FunctionalComponent;