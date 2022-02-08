import React from "react";
import { contactsCollections } from "../api/contactsCollections";
import { useTracker } from 'meteor/react-meteor-data';
export const ContactList = () => {

    const contacts = useTracker(() => {
        return contactsCollections.find({}).fetch();
    })
    return(
        <>
        <h3>Contact List</h3>
        {
            contacts.map(contact => (
                <li key={contact.email}>{contact.name} - {contact.email}</li>
            ))
        }
        </>
    )
}