//promise
    //resolve
    //pending
    //rejected
function returnPromise(){
    const gitPromise = new Promise((resolve, reject) =>{
       setTimeout(() =>{
            //resolve(1)
            reject("error message")
       }, 2000)
       // resolve(1)
        //if the promise is successful, it will return 1
        //reject("error message")
        //if the promise is rejected, it will return error
    });
    
    return gitPromise

    // getpromise.then:- when the promise is resolved
    
    // gitPromise.then((result) =>{
    //     console.log(result);
    // })

    // getpromise.catch:- when the promise is rejected

    // gitPromise.catch((error) =>{
    //     console.log(error);
    // })

}
async function promiseResolve(){
    try{
    const getReturnPromise = await returnPromise(1);
    console.log(getReturnPromise);
    }
    catch(error){
        console.log(error);
    }
}
promiseResolve();
