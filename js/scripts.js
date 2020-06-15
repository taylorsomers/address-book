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
  this.currentId++;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (let i=0; i < this.contacts.length; i++) {
    if (this.contacts[i].id == id) {
      return this.contacts[i];
    }
  }
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i < this.contacts.length; i++) {
    if (this.contacts[i].id == id) {
      delete this.contacts[i];
      return true;
    }
  }
  return false;
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