import * as React from "react";
import { ContactsList } from "./ContactsList";
import { AppHeader } from "./AppHeader";
import { connect } from "react-redux";
import { contactsFetched } from "./actions";

export class App extends React.Component {
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
          <ContactsList contacts={this.props.contacts} /> {/* (2) */}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
};
const mapDispatchToProps = { contactsFetched };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
