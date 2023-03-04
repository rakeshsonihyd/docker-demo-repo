
(function() {

    var ModelHandlerController = function ($scope,$uibModalInstance,items,selected) {
      vm = $scope;
      vm.items = items;
      vm.selected = selected;
      // var selectedParent =new Array();
      // if(selected != null)s
      //   vm.modalTreeView.
      
      vm.ok = function () {
        try {
       //   console.log(vm.modalTreeView.checkedNodes); //only works when ceckbox is enabled
          //if we want a multiselect tree view just 
          //data-checkbox-support = true and use the 
          //vm.modalTreeView.checkedNodes as return value in below code
          // console.log("from modelHandler " + selected);
          $uibModalInstance.close(vm.modalTreeView.checkedNodes);
        } catch (error) {
          $uibModalInstance.close(vm.modalTreeView.checkedNodes);
        }   
      };
      
     vm.printParent = function ($event) {
        var root = $scope;
        var currentScope = angular.element($event.target).scope();
        currentScope = currentScope.$parent;
        while(currentScope.$id !== root.$id) {
          var children = currentScope.node["children"];
          var isChecked = true;
          for(var child in children){
            if(children[child]["checked"] == false || children[child]["checked"] == undefined){
              isChecked = false;
            }
         }
        //  if(isChecked){
          //vm.modalTreeView.checkedNodes.push(currentScope.node["roleName"]);
          // console.log("====================");
          // console.log(currentScope.node["roleName"]);
					// 	var index = vm.modalTreeView.checkedNodes.indexOf(currentScope.node["roleName"]);
					// 	if(index != -1){
          //     vm.modalTreeView.checkedNodes.splice(index, 1);
					// 	}
        //  }
         
          currentScope.node["checked"] = isChecked;
          currentScope = currentScope.$parent;
         
        }
      }

      vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
      
    };
   

    ModelHandlerController.$inject = ['$scope','$uibModalInstance','items','selected'];

    app = angular.module('datatableApp')
      .controller('ModelHandlerController', ModelHandlerController);
    
}());

