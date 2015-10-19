(function(){

  //return
  function somethingAsyc(callback){
    //do something async for result
    if(err){
      callback(err);
    }
    else{
      callback(null, result);
    }
  }

  //throw Error
  function somethingElseAsync(){
    return promise;
  }


  somethingAsync(function(err, result){
    console.log('Callback: finally');
  });

  somethingElseAsync()
    .then(function(){
      console.log('Promise: finally');
    });

  //Redemption from Callback hell

}());
