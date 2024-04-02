
const fetchPromise = fetch(
"https://github.com/incubyte/playbook/blob/page/roles-test-craftsperson/docs/handbook/Roles-at-Incubyte/Test-Craftsperson-Expertise-Levels-and-Guideli.md"

)

 

console.log(fetchPromise);

 

fetchPromise.then((response)=> {

console.log(fetchPromise);

console.log(`received response - status code ${response.status}`)

})