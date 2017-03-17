import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action'
import { TweenMax } from 'gsap'

class Input extends React.Component {

  componentDidMount() {
    // TweenMax.to(this.input,0.5,{x:19})
  }

  style = {border:'1px solid black'}

  handleKeyDown = e => {
    // e.preventDefault()
    if(e.key === 'Enter' && e.target.value !== ''){
      this.props.addTodo(e.target.value)
      e.target.value = ''
    }
  }

  render() {
    return <input style={this.style} ref={d=>this.input=d} onKeyDown={this.handleKeyDown} />
  }
}

Input = connect(null,{addTodo})(Input)

export default Input
