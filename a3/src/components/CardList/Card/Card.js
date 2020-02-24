import React, { Component } from 'react'
import '../../../App.css';


export class Card extends Component {
  
  render() {


    return (
      <div className="github-profile">
        <img src={this.props.avatar_url} alt="profile phote" />
        <div className="info">
    <div className="name">{this.props.name}</div>
    <div className="company">{this.props.company}</div>
        </div>
      </div>
    )
  }
}

export default Card


/*
	const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];
*/

