import * as React from "react";
import { connect } from "react-redux";
import { searchContacts } from "./actions";

class ContactsFilter extends React.Component {
  render() {
    return (
      <div className="ui icon fluid input">
        <input
          type="text"
          placeholder="Search..."
          value={this.props.contactsSearch}
          onChange={this.handleSearchChange}
        />
        <i className="search icon" />
      </div>
    );
  }

  handleSearchChange = e => {
    this.props.searchContacts(e.currentTarget.value);
  };
}

const mapStateToProps = state => {
  return {
    contactsSearch: state.contactsSearch
  };
};

const mapDispatchToProps = { searchContacts };

export const ContactsFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsFilter);
