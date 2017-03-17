import React from 'react'
import { NavLink } from 'react-router-dom'

const style = {color:'black'}

let Filter = ({ match }) => (
  <div className='Filter'>
    <NavLink exact to='/' activeStyle={style}>all</NavLink>
    <NavLink to='/active' activeStyle={style}>active</NavLink>
    <NavLink to='/completed' activeStyle={style}>completed</NavLink>
  </div>
)

export default Filter
