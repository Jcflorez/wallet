import React, { memo } from "react";
import { contactsCollections } from "../api/contactsCollections";
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";
/* export const ContactList = () => {

    const contacts = useTracker(() => {
        return contactsCollections.find({}).fetch();
    })
 */
/* This example requires Tailwind CSS v2.0+ */
/* const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Admin',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
  ] */
  
  export const ContactList = () => {
    const isLoading = useSubscribe('allContacts');
    isLoading?console.info('Loading ....'):console.info('Present the Data ....');
    const contacts = useFind(()=> contactsCollections.find({ archived : { $ne : true }}, { sort :{ createdAt: -1}}))

    /* const contacts = useTracker(() => {
        return contactsCollections.find({}, {sort:{createdAt: -1}}).fetch();
    });   */

    const archivedContact = (event, _id) => {
      event.preventDefault();
      console.info("Actualizando en List id_: ", _id);
      Meteor.call('contacts.archived', {contactId : _id} );
    }

    if(isLoading()){
      return (
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Is Loading
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
    const ContactItem = memo(( {contact} ) => {
      return(
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src={contact.imageUrl} alt="" />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                <div className="text-sm text-gray-500">{contact.email}</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.name}</td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a 
              href="#" 
              onClick={(event) => archivedContact(event, contact._id)}
              className="
                          inline-flex 
                          items-center 
                          shadow-sm px-2 
                          py-0 border 
                          border-gray-300 
                          text-xs 
                          leading-5 
                          font-medium 
                          rounded-full 
                          text-gray-100 
                          bg-red-500 
                          hover:bg-blue-500
                          ">
              Archiva
            </a>
          </td>
        </tr>
      )
    })

    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contacts.map((contact) => (
                    <ContactItem key={contact._id} contact={contact} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  


 /*    return(
        <>
        <h3>Contact List</h3>
        {
            contacts.map(contact => (
                <li key={contact.email}>{contact.name} - {contact.email}</li>
            ))
        }
        </>
    )
} */