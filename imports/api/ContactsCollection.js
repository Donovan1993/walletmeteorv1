import { Mongo } from 'meteor/mongo';
// ce fichier c pour sauvegarder en bd


export const ContactsCollection = new Mongo.Collection('contacts');