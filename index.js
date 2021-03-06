console.log('Before');
// callback function
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
      getCommits(repos[0], (commits) => {
          console.log(commits);
      })
  })   

});
    // Get the repositories   

console.log('After');

 function getUser(id , callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({  id: id , gitHubUsername: 'Chris' });
     }, 2000);
 }

 function getRepositories(username, callback) {
     setTimeout(() => {
         console.log('Fetching users repositories')
         callback( ['repo1', 'repo2', 'repo3'] );
     },3000)
      
 }

 // Comparison between Asynchronous code and synchronous code.

 // Asynchronous version.

//  console.log('Before');
//  getUser(1, getRepositories);
//    console.log('After');

// function displayCommits(commits){
//     console.log('commits');
// };

// function getCommits(repos) {
//     getCommits(repo, displayCommits);
// };

// function getRepositories(user) {
//     getRepositories(user.gitHubUsername, getCommits); 
// };

// Synchronous Version

// console.log('After');
// const user = getUser(1);
// const repos = getRepositories(user.gitHubUserName);
// const commits = getCommits(repos[0]);
// console.log('After');
