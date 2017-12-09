import React from 'react';
import Person from './Person/Person';

class Persons extends React.Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside constructor", props);
  }
  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount()");
  }
  componentWillReceiveProps(nextyProps) {
    console.log("[UPDATE Persons.js] Inside componentWillReceiveProps()", nextyProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[UPDATE Persons.js] Inside shouldComponentUpdate()", nextProps, nextState);
    return nextProps.persons !== this.props.persons
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE Persons.js] Inside componentWillUpdate()", nextProps, nextState);
  }
  componentDidUpdate() {
    console.log("[UPDATE Persons.js] Inside componentDidUpdate()")
  }
  render() {
    console.log("[Persons.js] Inside render()");
    return (this.props.persons.map((person, index) => {
      return (<Person
        key={person._id}
        name={person.name}
        age={person.age}
        click=
        {() => this.props.deletePerson(index) }
        changed=
        {(event) => this.props.nameChange(event, person._id)}/>)
    }));
  }
}
export default Persons;