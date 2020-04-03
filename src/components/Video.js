import React, { Component } from 'react'
import Description from './Description';

export class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: 'Loading...',
      id: this.props,
      data: null,
    }
  }
  componentDidMount() {
    this.fetchData(this.props.id);
  }
  componentDidUpdate(prevProps) {
    if(this.props.id !== prevProps.id) {
      this.fetchData(this.props.id)
    }
  }
  fetchData = (id) => {
    fetch(`http://localhost:9000/api/boardgames/video/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  render() {
    return (
      <div>
        <Description url={this.state.data} />
      </div>
    )
  }
}

export default Video
