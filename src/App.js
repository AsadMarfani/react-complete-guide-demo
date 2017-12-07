import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        _id:"person1",
        name: "Max",
        age: "23"
      }, {
        _id:"person2",
        name: "Millan",
        age: "28"
      }, {
        _id:"person3",
        name: "Andrew",
        age: "20"
      }
    ],
    showPersons: false
  }
  nameChangeHandler = (event, id) => {
    var personIndex = this.state.persons.findIndex(eachPerson => {
        return eachPerson._id === id;
    });
    const name = event.target.value;
    const particularPerson = {...this.state.persons[personIndex]};
    particularPerson.name = name;
    const persons = [...this.state.persons];
    persons[personIndex] = particularPerson;
    this.setState({
      persons
    });
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: "23"
        }, {
          name: "Millan",
          age: "28"
        }, {
          name: "Andrew",
          age: "30"
        }
      ]
    })
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
    // const style = {
    //   backgroundColor: "green",
    //   font: 'inherit',
    //   color:"white",
    //   border: "1px solid blue",
    //   cursor: "pointer",
    //   padding: "8px"
    // }

    let persons = null;
    let btnClass = '';
    if (this.state.showPersons) {
    persons = (
        <div>
          {this.state.persons.map((person, index)=>{
              return <Person
                        key = {person._id}
                        name = {person.name}
                        age = {person.age}
                        click = {() => this.deletePersonHandler(index)
                        }
                        changed = {(event) => this.nameChangeHandler(event, person._id)}
                      />
              })
          }
        </div>
      );
      btnClass = classes.Red;
      // style.backgroundColor = "red";
    }
    let assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>Hi I'am a React App!</h1>
        <p className = {assignedClasses.join(' ')}>This is really working</p>
        <button className = {btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
