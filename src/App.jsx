import * as React from "react";
import { ContactsList } from "./ContactsList";
import { AppHeader } from "./AppHeader";
import { ContactsFilterContainer } from "./ContactsFilter";
import { connect } from "react-redux";
import { contactsFetched } from "./actions";
import { getFilteredContacts } from "./selectors/getFilteredContacts";

export class App extends React.Component {
  state = {
    search: ""
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then(res => res.json())
      .then(json => this.props.contactsFetched(json.results));
  }

  render() {
    return (
      <div>
        <AppHeader />
        <main className="ui main text container">
          <ContactsFilterContainer />
          <ContactsList contacts={this.props.contacts} /> {/* (2) */}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: getFilteredContacts(state.contacts, state.contactsSearch)
  };
};

const mapDispatchToProps = { contactsFetched };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
