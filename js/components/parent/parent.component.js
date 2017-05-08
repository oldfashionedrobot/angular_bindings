angular
  .module('bindingsApp')
  .component('parent', {
    templateUrl: 'js/components/parent/parent.html',
    controller: ParentController
  });


ParentController.$inject = [];

function ParentController() {
  var vm = this;

  vm.person = {
    name: 'Barry',
    job: 'Plumber',
    food: 'Potato Salad'
  };
}