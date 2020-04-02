import React, { Component } from 'react'
import Description from './Description'
import './Game.css'

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      gameId: this.props.gameId,
      data: null
    }
  }
  componentDidMount() {
    this.fetchData(this.props.gameId);
  }
  componentDidUpdate(prevProps) {
    if(this.props.gameId !== prevProps.gameId) {
      this.fetchData(this.props.gameId)
    }
  }


  fetchData = (gameId) => {
    fetch(`http://localhost:9000/api/boardgames/description/${gameId}`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  
  render() {
    const { name } = this.props;
    if (!this.state.data) {
      return (
        <div>
          <p> {this.state.spinner} </p>
        </div>
      )
    }
    return (
      <div className="game">
          <h2 className="game-title">{name}</h2>
          <div className="description">
          <Description 
            name={name}
            image={this.state.data.image}
            description={this.state.data.description}
            minPlayers={this.state.data.minPlayers}
            maxPlayers={this.state.data.maxPlayers}
            playingTime={this.state.data.playingTime}
            yearPublished={this.state.data.yearPublished}
           /> 
          </div>             
      </div>
    )
  }
}

export default Game
