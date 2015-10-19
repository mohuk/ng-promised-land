(function(){

  angular.module('app')
    .controller('List', List);

    //Warning: this http service is a fake and does not support .success and .error messages
    function List(http, $uibModal, $q){
      var vm = this;
      vm.add = add;
      init();

      function init(){

        // 1. place an http.get request and attach it to vm.list
        // 2. attach a error handler - which would not work now
        // 3. Demo $q.all with one and two

        http.get()
          .then(function(res){
            vm.list = res;
          }, function(res){
            alert('opps an error has occured !');
          });

        $q.all([http.one(), http.two()])
          .then(function(res){
            var oneRes = res[0];
            var twoRes = res[1];
          });

      }

      function add(){
        // 1. open a uibModal -> src/add.html
        // Open the modal and get the record data
        var modal = $uibModal.open({
          templateUrl: 'src/add.html'
        });

        modal.result
        .then(http.post) // 2. attach a success handler to it then post it
        .then(function(){ // 3. attach a processor handler to it
          console.log('post success');
        }, function(){
          throw new Error('New Error');
        })
        // 5. demo a catch function
        .catch(function(res){
          console.log(res);
        })
        // 6. demo a finally function
        .finally(function(){
          //irrespective of the rejection or resolution .. this function gets called
          alert('finally');
        });
      }
    }

}());
