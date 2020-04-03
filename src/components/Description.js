import React, { Component } from 'react'
import './Description.css'


export class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.description,
      image: this.props.image,
      minPlayers: this.props.minPlayers,
      maxPlayers: this.props.maxPlayers,
      playingTime: this.props.playingTime,
      yearPublished: this.props.yearPublished,
      url: this.props.url,
    }
  }
  render() {
    const { name } =this.props;
    const { description } = this.props;
    const { image } = this.props;
    const { minPlayers } = this.props;
    const { maxPlayers } = this.props;
    const { playingTime } = this.props;
    const { yearPublished } = this.props;
    const urlBuy = `https://www.amazon.co.uk/s?k=${name}&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_1`;
    const { url }= this.props;

    return (
      <div className="container">
        <img src={image} className="img" alt="img"></img>
        <div>
        <p className="description">{description}</p>
        <span className="extra-info">Players: {minPlayers}  -  {maxPlayers} / Playing Time: {playingTime} / Year Published: {yearPublished}</span>
        <button onClick={() =>window.open(urlBuy, "_blank")}>Buy on Amazon</button>
        {/* <button onClick={() =>window.open(url, "_blank")}>Watch on YouTube</button> */}
        </div>
      </div>
    )
  }
}

export default Description
