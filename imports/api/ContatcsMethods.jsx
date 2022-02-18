import { contactsCollections } from "./contactsCollections";

Meteor.methods({
    'contacts.insert'({name, email, imageUrl}) {
        if(!name) {
            throw new Meteor.Error("El campo Nombre ees requerido");
        } 
        if(!imageUrl) {
            throw new Meteor.Error("El campo Image Url es requerida");
        } 
        return contactsCollections.insert({name, email, imageUrl, createdAt : new Date() });
    },

    'contacts.remove'({contactId}) {
        console.info("Borrando En Methodo _id: ",contactId);
        contactsCollections.remove(contactId);
    }
});
