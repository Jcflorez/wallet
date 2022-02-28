import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

import { contactsCollections } from "./contactsCollections";

Meteor.methods({
    'contacts.insert'({name, email, imageUrl}) {
        check(name, String);
        check(email, String);
        check(imageUrl, String);
        //console.log("Error: ", Math.Error)
        
        if(!name) {
            throw new Meteor.Error("El campo Nombre ees requerido");
        } 
        /*if(!imageUrl) {
            throw new Meteor.Error("El campo Image Url es requerida");
        } */
        return contactsCollections.insert({name, email, imageUrl, createdAt : new Date() });
    },

    'contacts.remove'({contactId}) {
        console.info("Borrando En Methodo _id: ",contactId);
        check(contactId, String);
        contactsCollections.remove(contactId);
    },
    'contacts.archived'({contactId}){
        check(contactId, String);
        console.log('Archived Contact: ', contactId)
        contactsCollections.update({ _id : contactId }, { $set: { archived: true }});
    }
});
