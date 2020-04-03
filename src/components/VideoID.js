import React, { Component } from 'react'
import Video from './Video'

export class VideoID extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: 'Loading...',
      name: this.props.name,
      data: null,
    };
  }
  componentDidMount() {
   this.fetchData(this.props.name);
  }
  
  fetchData = (name) => {
    fetch(`http://localhost:9000/api/boardgames/${name}`)
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
      <div>
        <Video id={this.state.data} />
      </div>
    ) 
}
}

export default VideoID
