import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
  return (props.persons.map((person, index) => {
    return (<Person
      key={person._id}
      name={person.name}
      age={person.age}
      click=
      {() => props.deletePerson(index) }
      changed=
      {(event) => props.nameChange(event, person._id)}/>)
  }));
}

export default persons;