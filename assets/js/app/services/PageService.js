"use strict";

angular.module('codecraft')
.factory('Contact', Contact)
.service('ContactService', ContactService);

Contact.$inject = ['$resource'];
function Contact($resource) {
  return $resource('https://api.codecraft.tv/samples/v1/contact/:id');
}

ContactService.$inject = ['Contact'];
function ContactService(Contact) {



  let self = {
    addPerson: function (person) {
      this.persons.push(person);
    },
    page: 1,
    hasMore: true,
    isLoading: false,
    selectedPerson: null,
    persons: [],
    loadContacts: function () {
      Contact.get(function (data) {

        //todo: delete
        console.log('Contact get data:');
        console.dir(data);

        angular.forEach(data.results, function (person) {
          self.persons.push(new Contact(person));
        })
      });
    }
  };

  self.loadContacts();

  return self;
}