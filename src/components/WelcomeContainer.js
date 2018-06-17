import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <p> 
        Hi there, word warrior! Meet your destiny here. /insert-evil-laugh-here/ 
        </p>
        <Link to="/hangman"> Start playing! </Link>
      </div>
    )
  }
}
