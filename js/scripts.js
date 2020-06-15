// Business Logic:

  // Business Logic for Address Book:

function AddressBook() {
  this.contacts = []
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
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