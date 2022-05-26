import React from 'react';

import axios from 'axios';

export default class Admin extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/person/list`)
      .then(res => {
        const persons = res.data;
        console.log(persons)
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li key={person.id}>{person.firstName||'null'} {person.lastName||'null'} {person.phone||'null'} {person.email||'null'} {person.description||'null'} {person.called||'no'} </li>)}
      </ul>
    )
  }
}
export {Admin};