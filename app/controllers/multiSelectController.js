app.controller('MultiSelectController', function($scope) {
    $scope.Rakesh ="Hai"
     $scope.available = [];
     $scope.selected = [];
     
     $scope.moveItem = function(items, from, to) { // all three object/array
     
       angular.forEach(items, function(item) { //item-->element iterated from items
         var idx = from.indexOf(item);
         from.splice(idx, 1);//remove index splice(startindex of element to remove, no of element to remove)
         to.push(item);//add elemnt
       });
     
       // clear selection
       $scope.available = "";
       $scope.selected = "";
     };
     
     $scope.moveAll = function(from, to) {
     
       angular.forEach(from, function(item) {
         to.push(item);
       });
       from.length = 0;
     };
     
     $scope.selectedclients = [];
     $scope.availableclients = [{
       id: 1,
       name: 'Sajana Vijayan'
     }, 
     {
       id: 2,
       name: 'Fina Mesina'
     }, 
     {
       id: 3,
       name: 'Rakesh Soni'
     }, 
     {
       id: 4,
       name: 'Edmark Argente'
     },
     {
         id: 5,
         name: 'Mark Bryan Calupig'
       },
       {
         id: 6,
         name: 'Martin Rey Battad'
       },
       {
         id: 7,
         name: 'Varsha Suresh'
       },
       {
         id: 8,
         name: 'Preetha Suresh'
       },
       {
         id: 9,
         name: 'Suresh Kumar'
       },
       {
         id: 10,
         name: 'Niharika Soni'
       },
 
 
 
    ];
     
     });