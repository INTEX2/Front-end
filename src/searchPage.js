import React from 'react';
import axios from 'axios';
// import Loader from '../loader.gif';
import PageNavigation from './pageNavigation';

class SearchP extends React.Component {
    render() {
        return (
          <div>
            <h2>Contact List</h2>
            <br />
            <ContactList contacts={this.props.contacts} />
          </div>
        )
      }
    }
    
    class Contact extends React.Component {
      render() {
        return (
          <li>{this.props.contact.name} {this.props.contact.phone}</li>
        )
      }
    }
    
    class ContactList extends React.Component {
      constructor() {
        super();
        this.state = {
          search: ''
        };
      }
    
      // Passing in event to allow access to whatevever is typed into the textbox
      updateSearch(event) {
        this.setState({
          // Limit to 10 characters only for search
          search: event.target.value.substr(0, 10)
        });
        //    console.log(this.state.search); // this will show the previous value of state.
      }
    
      render() {
        //  Note: below part where map is the juice where iteration is done. Passing bind will let updateSearch function to access this.state.search
        let filteredContacts = this.props.contacts.filter(
          (contact) => {
            //Use includes looks cleaner and should be easier to remember.
            //return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            return contact.name.toLowerCase().includes(this.state.search.toLowerCase());
          }
        );
    
        return (
          <div>
            <input className="text" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
            <hr />
            <ul>
            {filteredContacts.map((contact) => {
              return <Contact contact={contact} key={contact.id} />
            })}
            </ul>
            </div>
        )
      }
    }

export default SearchP