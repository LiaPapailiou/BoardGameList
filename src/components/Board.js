import React, { Component } from 'react'
import Game from './Game'
import './Board.css'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: 'Loading...',
      data: null,
    };
  }
  componentDidMount() {
   this.fetchData(`http://localhost:9000/api/boardgames`);
  }
  
  fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  render() {
    if (!this.state.data) {
      return (
        <div>
          <p> {this.state.spinner} </p>
        </div>
      )
    }
    return (
      <div className="container">
        <h2 className="title">Most Popular Board Games</h2>
        <p>
        {this.state.data.map((game) => <Game key={game} name={game.name} gameId={game.gameId}/>)}
        </p>
      </div>
    )
  }
}

export default Board
