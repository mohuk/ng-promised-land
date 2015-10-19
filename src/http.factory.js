(function(){

	angular.module('app')
		.factory('http', http);

	function http($timeout, $q){

    var list = [
          {
            id: 0,
            name: 'Batman',
            secret: 'Bruce Wayne',
            location: 'Gotham',
            alias: 'The Dark Knight'
          },
          {
            id: 1,
            name: 'Spiderman',
            secret: 'Peter Parker',
            location: 'Manhattan',
            alias: 'Spidey'
          },
          {
            id: 2,
            name: 'Courage',
            secret: 'Courage',
            location: 'In the Middle of nowhere',
            alias: 'Courage'
          },
          {
            id: 3,
            name: 'Wolverine',
            secret: 'Logan',
            location: 'X-Mansion',
            alias: 'Wolverine'
          }
        ];

    return {
      get: get,
      post: post,
      one: one,
      two: two
    };

    // demo by replacing a $q on it

    function get(){
      //$timeout returning a promise
      return $timeout(function(){
        return list;
      }, 1500);
    }

    function post(record){
      return $timeout(function(){
        return list;
      });
    }

    function one(){
      return $timeout(function(){
        return 'One';
      }, 1000);
    }

    function two(){
      return $timeout(function(){
        return 'Two';
      }, 5000);
    }
	}

}());
