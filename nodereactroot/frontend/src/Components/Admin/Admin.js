import React from 'react';
import './Admin.css'
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
      <ul className='admin'>
        { this.state.persons.map(person => <li className='person_id' key={person.id}>{person.firstName||'null'} {person.lastName||'null'} {person.phone||'null'} {person.email||'null'} {person.description||'null'} {person.called||'no'} </li>)}
      </ul>
    )
  }
}
export {Admin};