const request = require('request');

function leer(url){
    return new Promise(function(resolve,reject){

        request(url,function(err,response){
            if(err){
                reject(err);
            }else{
                resolve(response)
            }
        });
    });

}


leer('http://google.es')
    .then(function(response){
        console.log('response: ',response);
    })
    .catch(function(err){
        console.log('err: ',err);
    });
