"use strict";

angular.module('codecraft')
.factory('Contact', Contact)
.service('ContactService', ContactService);

Contact.$inject = ['$resource'];
function Contact($resource) {
  return $resource('https://api.codecraft.tv/samples/v1/contact/:id',
    {id:'@id'},
    {update: {
      method: 'PUT'
    }
  });
}

ContactService.$inject = ['Contact', 'Data'];
function ContactService(Contact, Data) {

  let self = {
    addPerson: function (person) {
      this.persons.push(person);
    },
    page: 1,
    hasMore: true,
    isLoading: false,
    selectedPerson: null,
    persons: [],
    search: null,
    doSearch: function (search) {
      self.hasMore = true;
      self.page = 1;
      self.persons = [];
      self.search = search;
      self.loadContacts();
    },
    doOrder: function (order) {
      self.hasMore = true;
      self.page = 1;
      self.persons = [];
      self.ordering = order;
      self.loadContacts();
    },
    loadContacts: function () {
      if (self.hasMore && !self.isLoading) {
        self.isLoading = true;

        let params = {
          page: self.page,
          search: self.search,
          ordering: self.ordering
        };

        Contact.get(params, function (data) {

          //todo: delete
          console.log('Contact get data:');
          console.dir(data);

          angular.forEach(data.results, function (person) {
            self.persons.push(new Contact(person));
          });

          if (!data.next) {
            self.hasMore = false;
          }

          self.isLoading = false;
        });
      }
    },
    loadMore: function () {
      if (self.hasMore && !self.isLoading) {
        self.page += 1;
        self.loadContacts();
      }
    },
    updateContact: function (person) {
      console.log('Service Called updateContact...');
      Contact.update(person);
    },

    // To one time loading data to localDisk database
    loadDataToBD: function (data) {
      let thisData = new Data(data);

      thisData.$save().then(function (data) {
        console.log('loadDataToBD:$save:data:');
        console.dir(data);
      });
    },
    updateDataToBD: function (data) {
      console.log('updateDataToBD:$update:data received:');
      console.dir(data);
      let thisData = Data.find({id_original: data.id, sex: data.sex}, function () {
        console.log('updateDataToBD:$update:thisData:');
        console.log('Data length:' + thisData.length);
        console.dir(thisData);

        if (thisData.length == 1) {
          let updateRecord = Data.get({id: thisData[0].id}, function () {
            updateRecord.sex = data.sex;

            updateRecord.$update().then(function (data) {
              console.log('updateDataToBD:$update:data:');
              console.dir(data);
            });
          });
        }
      });

    }
  };

  self.loadContacts();

  return self;
}