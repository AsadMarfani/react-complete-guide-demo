import React, {Component} from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside constructor", props);
  }
  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] Inside shouldComponentUpdate()", nextProps, nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] Inside componentWillUpdate()", nextProps, nextState);
  }
  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate()")
  }
  state = {
    persons: [
      {
        _id: "person1",
        name: "Max",
        age: "23"
      }, {
        _id: "person2",
        name: "Millan",
        age: "28"
      }, {
        _id: "person3",
        name: "Andrew",
        age: "20"
      }
    ],
    showPersons: false
  }
  nameChangeHandler = (event, id) => {
    var personIndex = this
      .state
      .persons
      .findIndex(eachPerson => {
        return eachPerson._id === id;
      });
    const name = event.target.value;
    const particularPerson = {
      ...this.state.persons[personIndex]
    };
    particularPerson.name = name;
    const persons = [...this.state.persons];
    persons[personIndex] = particularPerson;
    this.setState({persons});
  }
  togglePersonsHandler = () => {
    const doeShow = this.state.showPersons;
    this.setState({
      showPersons: !doeShow
    });
  }
  deletePersonHandler = (personIndex) => {
    var personState = [...this.state.persons];
    personState.splice(personIndex, 1);
    this.setState({persons: personState});
  }
  render() {
    console.log("[App.js] Inside render()");
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        deletePerson={this.deletePersonHandler}
        nameChange={this.nameChangeHandler}/>
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.showPersons}
          clicked={this.togglePersonsHandler}/> {persons}
      </div>
    );
  }
}

export default App;
