import * as React from "react";
import { ContactsList } from "./ContactsList";
import { AppHeader } from "./AppHeader";

export class App extends React.Component {
  state = {
    contacts: null
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then(res => res.json())
      .then(json => this.setState({ contacts: json.results }));
  }

  render() {
    const contacts = this.state.contacts;

    return (
      <div>
        <AppHeader />
        <main className="ui main text container">
          {contacts ? <ContactsList contacts={contacts} /> : 'Ładowanie…'}
        </main>
      </div>
    );
  }
}
