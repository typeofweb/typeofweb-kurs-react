import * as React from "react";
import { ContactItem } from "./ContactItem";

export class ContactsList extends React.Component {
  contactToContactItem = contact => {
    const avatarUrl = contact.picture.thumbnail;
    const { title, first, last } = contact.name;
    const name = `${title} ${first} ${last}`.trim();
    const phone = contact.phone;
    const key = contact.login.username;
    return <ContactItem key={key} avatarUrl={avatarUrl} name={name} phone={phone} />;
  };

  render() {
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.contacts.map(this.contactToContactItem)}
      </ul>
    );
  }
}
