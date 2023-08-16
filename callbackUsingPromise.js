function getUserName(userID){
    const gitPromise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Reading from getUserName function database");
            if(userID>0){
                resolve({userid: userID, username : "Taiyab"});
            }
            else{
                reject("Error message");
            }
        }, 2000);
    })
    return gitPromise;

    
}
// Execution: 2 ways to execute

//one way
// const username = getUserName(1)
// username.then((user) =>{
//     console.log(user);
// })


/// other ways

async function promiseResolve(){
    const getReturnPromise = await getUserName(7);
    console.log(getReturnPromise);
}
promiseResolve();



function getUserRepo(userName){
    const gitPromise2 = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("Reading from getUserRepo databse");
            if(!userName){
                reject("No data found!")
            }else{
                resolve({username: userName, repos: ["repo1", "repo2", "repo3"]});
            }
        }, 2000)
    })
    return gitPromise2;
    
}

async function promiseResolve2(){
    const getReturnPromise2 = await getUserRepo("Taiyab");
    console.log(getReturnPromise2);
}
promiseResolve2();
