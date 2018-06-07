import React from "react";
import contacts from "../contacts.json";

console.log(contacts);
const ContactsList = () => {
  return (
    <ul>
      {contacts.map((contact, index) => {
        return <li key={index}>{contact.name}</li>;
      })}
    </ul>
  );
};

export default ContactsList;
