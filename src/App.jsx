import * as React from "react";
import { ContactsList } from "./ContactsList";
import { SeedPickerContainer } from "./SeedPicker";
import { AppHeader } from "./AppHeader";
import { ContactsFilterContainer } from "./ContactsFilter";
import { connect } from "react-redux";
import { fetchContacts } from "./actions";
import { getFilteredContacts } from "./selectors/getFilteredContacts";

export class App extends React.Component {
  state = {
    search: ""
  };

  componentDidMount() {
    this.props.fetchContacts()
  }

  render() {
    return (
      <div>
        <AppHeader />
        <main className="ui main text container">
          <form className="ui large form">
            <div className="ui segment">
              <SeedPickerContainer />
              <ContactsFilterContainer />
            </div>
          </form>
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

const mapDispatchToProps = { fetchContacts };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
