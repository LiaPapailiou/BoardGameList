import React, { Component } from 'react'
import Description from './Description';

export class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: 'Loading...',
      data: null,
      id: this.props.id,
    }
  }
  componentDidMount() {
    this.fetchData(this.props.id);
  }
  fetchData = (id) => {
    fetch(`https://www.boardgameatlas.com/api/game/videos?limit=20&client_id=GRYCkBFss8&game_id=${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  render() {
    return (
      <div>
        <Description url={this.state.data.url} />
      </div>
    )
  }
}

export default Video
