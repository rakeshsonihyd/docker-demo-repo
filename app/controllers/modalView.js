
(function() {
    
    var ModalView = function ($scope,$uibModal) {
      var selected = "No selected";
      var vm = $scope;
     
      vm.items = [{
        "roleName": "Fruits",
        "roleId": "role1",
        "collapsed": true,
        "children": [{
            "roleName": "Mango",
            "roleId": "role2",
            "collapsed": true,
            "children": []
        }, {
            "roleName": "Apple",
            "roleId": "role3",
            "collapsed": true,
            "children": []
        }]
    },
    {
        "roleName": "Vegetable",
        "roleId": "role7",
        "collapsed": true,
        "children": [{
            "roleName": "Garlic",
            "roleId": "role8",
            "collapsed": true,
            "children": []
        }, {
            "roleName": "Onion",
            "roleId": "role9",
            "children": [{
                "roleName": "Red Onion",
                "roleId": "role10",
                "children": [{
                    "roleName": "Chinese Onion",
                    "roleId": "role11",
                    "children": []
                }, {
                    "roleName": "PH Onion",
                    "roleId": "role12",
                    "children": []
                }]
            }]
        }]
    },
    {
        "roleName": "Meat",
        "roleId": "role13",
        "collapsed": true,
        "children": [{
            "roleName": "Chicken",
            "roleId": "role14",
            "children": []
        }, {
            "roleName": "Lamb",
            "roleId": "role15",
            "collapsed": true,
            "children": [{
                "roleName": "Steak",
                "roleId": "role16",
                "children": [{
                    "roleName": "Belly",
                    "roleId": "role17",
                    "children": []
                }, {
                    "roleName": "Milk",
                    "roleId": "role18",
                    "children": []
                }]
            }]
        }]
    }];

     vm.showPopup = function(){	
	
        var modalInstance = $uibModal.open({
           ariaLabelledBy: 'modal-title',
           ariaDescribedBy: 'modal-body',
           templateUrl: 'app/views/modalview.html',
           controller :'ModelHandlerController',
           controllerAs: '$ctrl',
           size: 'lg',
           resolve: {
              items: function(){
                return vm.items;
               },
              selected:function(){
                return vm.selected
              }
            }
           });
           modalInstance.result.then(function (selectedItem) {
           vm.selected = selectedItem;
           selected = vm.selected;
          }, function () {
        
            console.log('Modal dismissed at: ' + new Date()) + $scope.selected;
          });
      }

    };

    ModalView.$inject = ['$scope','$uibModal'];

    app = angular.module('datatableApp')
      .controller('ModalView', ModalView);
    
}());
