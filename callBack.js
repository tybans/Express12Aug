function getusername(userID,callBack){
    setTimeout(() => {
        console.log("Reading from GitHub database");
        callBack({userID: userID, userName : "Taiyab"});
    });

    
}

function getUserRepo(username, callBack){
    setTimeout(() =>{
        console.log("Reading from GitHub databse");
        callBack({username: username, repos: ["repo1", "repo2", "repo3"]})
    })
}

getusername(1,(user) => {
    console.log(user);
    getUserRepo(user.userName, (userRepo) => {
        console.log(userRepo);
    })
});