import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../action'
import { withRouter } from 'react-router'
import { getFilteredTodos } from '../reducers'
import List from './List'

class VisibleList extends React.Component {

  componentDidMount() {
    this.fetchData()
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps){
      this.fetchData()
    }
  }

  fetchData(){
    const { filter,fetchTodos } = this.props
    fetchTodos(filter)
  }

  render() {
    return <List {...this.props} />
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all'
  return {
    filter,
    todos: getFilteredTodos(state, filter)
  }

}

VisibleList = withRouter(connect(mapStateToProps,{...actions})(VisibleList))

export default VisibleList
