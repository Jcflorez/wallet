import { contactsCollections } from "./contactsCollections";
import { Meteor } from "meteor/meteor";


Meteor.publish('allContacts', function publishAllContacts(){
    return contactsCollections.find();
})