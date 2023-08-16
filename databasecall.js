// function databaseCall(id){
//     setTimeout(() =>{
//         console.log("Reading from database");
//         //return({id: id, userName: "Taiyab"});
//     }, 2000)
//     return({id: id, userName: "Taiyab"});
// };

// user = databaseCall(7)
// console.log("user", user);

//to solve this type of problems we write Async programming approach
    // with 3 different strategy:
    //1- callback function
    //2- prpmises
    //3- Async & await

    function databaseCall(id, callback){
        setTimeout(() =>{
            console.log("Reading from database");
            callback({id: id, userName: "Taiyab"});
        }, 2000)
        //return({id: id, userName: "Taiyab"});
    };
    
    user = databaseCall(7, (user) =>{
        console.log("user inside callback", user);
    })
    console.log("user outside callback", user);