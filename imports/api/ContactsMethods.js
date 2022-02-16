import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import {ContactsCollection} from "./ContactsCollection";
//permert de rendre la fonction globals car il recoit un objet
Meteor.methods({
  'contacts.insert'({ name, email, imageUrl }) {
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    //on verifie si un nom a bien ete rentrer
    if(!name ) {
      throw new Meteor.Error("Name is required.");
    } 
    if(!email ) {
        throw new Meteor.Error("Email is required.");
      } 
    return ContactsCollection.insert({ name, email, imageUrl, createdAt: new Date() });
  },
  'contacts.remove'({ contactId }) {
    check(contactId, String);
    ContactsCollection.remove(contactId);
  }
})
