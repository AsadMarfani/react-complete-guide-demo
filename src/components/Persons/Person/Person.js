import React from 'react';
import persons from './Person.css';

class Person extends React.Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside constructor", props);
  }
  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
  }
  render() {
    console.log("[Person.js] Inside render()");
    return (
      <div className={persons.Person}>
        <p onClick={this.props.click}>I am a Person {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    )
  }
}

export default Person;