//based on the git userid, get git username(hardcoded)
//write function to get all the repos of that user


function getUserName(userID, callBack){
    setTimeout(() => {
        console.log("Reading from GitHub database");
        callBack({userid: userID, username : "Taiyab"});
    });

    
}

function getUserRepo(userName, callBack){
    setTimeout(() =>{
        console.log("Reading from GitHub databse");
        callBack({username: userName, repos: ["repo1", "repo2", "repo3"]})
    })
}

getUserName(1,(user) => {
    console.log(user);
    getUserRepo(user.userName, (userRepo) => {
        console.log(userRepo);
    })
    // a nested callback function:- callback hell, because its very complicated
    // so we use Promise instead, which is easier version

});