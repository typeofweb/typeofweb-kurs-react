import * as React from "react";
import { AppHeader } from "./AppHeader";
import { ContactsFilterContainer } from "./ContactsFilter";
import { connect } from "react-redux";
import { contactsFetched } from "./actions";
import { getFilteredContacts } from "./selectors/getFilteredContacts";
import { AsyncComponent } from "./AsyncComponent";

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
          {this.maybeRenderContactsList()}
        </main>
      </div>
    );
  }

  maybeRenderContactsList = () => {
    if (!this.props.contacts.length) {
      return null;
    }

    return (
      <AsyncComponent
        componentProps={{ contacts: this.props.contacts }}
        componentProvider={() =>
          import("./ContactsList").then(module => module.ContactsList)
        }
      />
    );
  };
}

const mapStateToProps = state => {
  return {
    contacts: getFilteredContacts(state.contacts, state.contactsSearch)
  };
};

const mapDispatchToProps = { contactsFetched };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
