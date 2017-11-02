let p1 = new Promise((resolve,reject)=> setTimeout(resolve,500,"hola") );

let p2 = new Promise((resolve,reject)=> setTimeout(resolve,600,"seg hola") );

p1.then(console.log);