var app
(function() {
    
    var TreeViewController = function ($scope) {
      var vm = $scope;
      vm.roleList1 = [{
        "roleName": "User",
        "roleId": "role1",
        "children": [{
            "roleName": "subUser1",
            "roleId": "role11",
            "children": []
        }, {
            "roleName": "subUser2",
            "roleId": "role12",
            "children": [{
                "roleName": "subUser2-1",
                "roleId": "role121",
                "children": [{
                    "roleName": "subUser2-1-1",
                    "roleId": "role1211",
                    "children": []
                }, {
                    "roleName": "subUser2-1-2",
                    "roleId": "role1212",
                    "children": []
                }]
            }]
        }]
    },
    {
        "roleName": "Admin",
        "roleId": "role2",
        "children": []
    },
    {
        "roleName": "Guest",
        "roleId": "role3",
        "children": []
    }];

    //test tree model 2
    vm.roleList2 = [{
        "roleName": "User",
        "roleId": "role1",
        "collapsed": true,
        "children": [{
            "roleName": "subUser1",
            "roleId": "role11",
            "collapsed": true,
            "children": []
        }, {
            "roleName": "subUser2",
            "roleId": "role12",
            "collapsed": true,
            "children": [{
                "roleName": "subUser2-1",
                "roleId": "role121",
                "children": [{
                    "roleName": "subUser2-1-1",
                    "roleId": "role1211",
                    "children": []
                }, {
                    "roleName": "subUser2-1-2",
                    "roleId": "role1212",
                    "children": []
                }]
            }]
        }]
    },
    {
        "roleName": "Admin",
        "roleId": "role2",
        "collapsed": false,
        "children": [{
            "roleName": "subAdmin1",
            "roleId": "role11",
            "collapsed": true,
            "children": []
        }, {
            "roleName": "subAdmin2",
            "roleId": "role12",
            "children": [{
                "roleName": "subAdmin2-1",
                "roleId": "role121",
                "children": [{
                    "roleName": "subAdmin2-1-1",
                    "roleId": "role1211",
                    "children": []
                }, {
                    "roleName": "subAdmin2-1-2",
                    "roleId": "role1212",
                    "children": []
                }]
            }]
        }]
    },
    {
        "roleName": "Guest",
        "roleId": "role3",
        "collapsed": true,
        "children": [{
            "roleName": "subGuest1",
            "roleId": "role11",
            "children": []
        }, {
            "roleName": "subGuest2",
            "roleId": "role12",
            "collapsed": true,
            "children": [{
                "roleName": "subGuest2-1",
                "roleId": "role121",
                "children": [{
                    "roleName": "subGuest2-1-1",
                    "roleId": "role1211",
                    "children": []
                }, {
                    "roleName": "subGuest2-1-2",
                    "roleId": "role1212",
                    "children": []
                }]
            }]
        }]
    }];

      // Generate random name data for testing
     
    };

    TreeViewController.$inject = ['$scope'];

    app = angular.module('datatableApp')
      .controller('TreeViewController', TreeViewController);
    
}());

