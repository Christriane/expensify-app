const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Christriane',
        //     age: 22
        // });
        reject('Something went wrong!');
    }, 2000);
});

console.log('before');

promise.then((data) => {
    console.log('1',data.name);
}).catch((error)=>{
    console.log('error',error);
});

console.log('after');