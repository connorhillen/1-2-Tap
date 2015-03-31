'use strict';

angular.module('12TapApp')
  .factory('Modal', function ($rootScope, $modal) {
    /**
     * Opens a modal
     * @param  {Object} scope      - an object to be merged with modal's scope
     * @param  {String} modalClass - (optional) class(es) to be applied to the modal
     * @return {Object}            - the instance $modal.open() returns
     */
    function openModal(scope, modalClass) {
      var modalScope = $rootScope.$new();
      scope = scope || {};
      modalClass = modalClass || 'modal-default';

      angular.extend(modalScope, scope);

      return $modal.open({
        templateUrl: 'components/modal/modal.html',
        windowClass: modalClass,
        scope: modalScope
      });
    }

    var services = ["Awesome Airlines", "Accidentally $160 on Prime Shopping", "Moving Music"];
    var colours  = ["modal-primary", "modal-success", "modal-info"];

    // Public API here
    return {

      getTextModal: function(user) {

        return function() {
          var passModal;
          var currentIndex = user.currentPhase % 3;

          passModal = openModal({
            modal: {
              dismissable: false,
              title: 'Login to ' + services[currentIndex],
              html: '<p>Your current password is: ' + user.phase[currentIndex] + '</p>',
              buttons: [{
                classes: 'btn-confirm',
                text: 'Login',
                click: function(e) {
                  passModal.close(e);
                }
              }]
            }
          }, colours[currentIndex]);

          passModal.result.then(function(event) {
            console.log(":D");
          });
        };

      },

      getTextModalPractice: function(user) {

        return function() {
          var passModal;
          var currentIndex = user.currentPhase % 3;

          passModal = openModal({
            modal: {
              dismissable: false,
              title: 'Login to ' + services[currentIndex],
              html: '<p>Your current password is: ' + user.phase[currentIndex] + '</p>',
              buttons: [{
                classes: 'btn-confirm',
                text: 'Login',
                click: function(e) {
                  passModal.close(e);
                }
              }]
            }
          }, colours[currentIndex]);

          passModal.result.then(function(event) {
            console.log(":D");
          });
        };

      },

      getTapModal: function(user) {

        return function() {
          var passModal;
          var currentIndex = user.currentPhase % 3;

          passModal = openModal({
            modal: {
              dismissable: false,
              title: 'Login to ' + services[currentIndex],
              html: '<p>Your current password is: ' + user.phase[currentIndex] + '</p>',
              buttons: [{
                classes: 'btn-confirm',
                text: 'Login',
                click: function(e) {
                  passModal.close(e);
                }
              }]
            }
          }, colours[currentIndex]);

          passModal.result.then(function(event) {
            console.log(":D");
          });
        };

      },

      getTapModalPractice: function(user) {

        return function() {
          var passModal;
          var currentIndex = user.currentPhase % 3;

          passModal = openModal({
            modal: {
              dismissable: false,
              title: 'Login to ' + services[currentIndex],
              html: '<p>Your current password is: ' + user.phase[currentIndex] + '</p>',
              buttons: [{
                classes: 'btn-confirm',
                text: 'Login',
                click: function(e) {
                  passModal.close(e);
                }
              }]
            }
          }, colours[currentIndex]);

          passModal.result.then(function(event) {
            console.log(":D");
          });
        };

      },

      /* Confirmation modals */
      confirm: {

        /**
         * Create a function to open a delete confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
         * @param  {Function} del - callback, ran when delete is confirmed
         * @return {Function}     - the function to open the modal (ex. myModalFn)
         */
        delete: function(del) {
          del = del || angular.noop;

          /**
           * Open a delete confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed staight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
                name = args.shift(),
                deleteModal;

            deleteModal = openModal({
              modal: {
                dismissable: true,
                title: 'Confirm Delete',
                html: '<p>Are you sure you want to delete <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-danger',
                  text: 'Delete',
                  click: function(e) {
                    deleteModal.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancel',
                  click: function(e) {
                    deleteModal.dismiss(e);
                  }
                }]
              }
            }, colours[currentIndex]);

            deleteModal.result.then(function(event) {
              del.apply(event, args);
            });
          };
        }
      }
    };
  });
