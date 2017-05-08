angular
  .module('bindingsApp')
  .component('child', {
    bindings: {
      stringBinding: '@',
      oneWayBinding: '<',
      twoWayBinding: '='
    },
    templateUrl: 'js/components/child/child.html',
    controller: ChildController
  });

ChildController.$inject = [];

function ChildController() {
  var vm = this;
}