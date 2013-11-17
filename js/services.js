'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('acmeMsgApp.services', []).
  value('version', '0.2.0').
  factory('Message', ['$resource', '$filter', function($resource, $filter){
    var Message =  $resource('/message/:messageId', {}, {
        query: {method:'GET', params:{messageId:'messages'}, isArray:true}
    });
    return Message;
}]);
