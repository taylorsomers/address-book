// Business Logic:

  // Business Logic for Address Book:

function AddressBook() {
  this.contacts = []
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId ++;
  return this.currentId;
}

  // End Business Logic for Address Book

  // Business Logic for Contacts:

function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

  // End Business Logic for Contacts

// End Business Logic

// UI Logic

$(document).ready(function() {

});

// End UI Logic