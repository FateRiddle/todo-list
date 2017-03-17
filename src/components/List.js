import React from 'react'
import { TweenMax } from 'gsap'


const ulStyle = {
  listStyle: 'none',
}

const setLiStyle = completed => {
  if(completed){
    return {textDecoration: "line-through"}
  }
}

class List extends React.Component {

  constructor(props){
    super(props)
    this.li = []
  }

  static propTypes = {
    todos: React.PropTypes.array,
    toggleTodo: React.PropTypes.func,
    filter: React.PropTypes.string,
  }

  animate(){
    const len = this.props.todos.length
    for (var i = 0; i < len; i++) {
      TweenMax.from(this.li[i],0.5,{y:-45*i})
    }
  }

  componentDidMount() {
    this.animate()
  }

  componentDidUpdate(prevProps,prevState) {
    if(this.props.filter !== prevProps.filter){
      this.animate()
    }
  }

  render(){
    const { todos,toggleTodo } = this.props
    return (
      <ul style={ulStyle}>
      {
        todos.map((t,index) => (
          <li key={t.id} ref={n=>this.li[index]=n} style={setLiStyle(t.completed)}
            onClick={() => toggleTodo(t.id)}
          >{t.title}</li>
        ))
      }
      </ul>
    )
  }
}



export default List
