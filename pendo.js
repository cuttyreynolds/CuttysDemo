function generateRandomName() {
    const boyNames = ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Joseph', 'Daniel', 'Matthew', 'Christopher', 'Andrew', 'Anthony', 'Joshua', 'Ryan', 'Nicholas', 'Tyler', 'Alexander', 'Nathan', 'Samuel', 'Christian', 'Benjamin', 'Elijah', 'Brandon', 'Justin', 'Jackson', 'Austin', 'Kevin', 'Ethan', 'Aiden', 'Logan'];
    const girlNames = ['Emily', 'Emma', 'Olivia', 'Isabella', 'Sophia', 'Ava', 'Mia', 'Madison', 'Elizabeth', 'Abigail', 'Charlotte', 'Ella', 'Amelia', 'Sofia', 'Harper', 'Grace', 'Avery', 'Hannah', 'Lily', 'Chloe', 'Evelyn', 'Victoria', 'Aria', 'Scarlett', 'Zoey', 'Addison', 'Lillian', 'Natalie', 'Brooklyn', 'Leah'];
    const isBoy = Math.random() < 0.5; // Randomly decide whether to choose a boy or girl name
    const names = isBoy ? boyNames : girlNames;
    const randomName = names[Math.floor(Math.random() * names.length)];
    return randomName;
}
const randomName = generateRandomName();
console.log(randomName);
function generateRandomEmail() {
    const animals = ['dog', 'cat', 'bird', 'rabbit', 'elephant', 'lion', 'tiger', 'bear', 'monkey', 'penguin', 'dolphin', 'whale', 'cheetah', 'giraffe', 'koala', 'zebra', 'fox', 'wolf', 'panda', 'deer', 'horse', 'kangaroo', 'otter', 'squirrel'];
    const domains = ['example.com', 'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'];
    
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    
    const randomNumber = Math.floor(Math.random() * 10000); // Appending a random number to ensure uniqueness
    
    return `${randomAnimal}${randomNumber}@${randomDomain}`;
}
const randomEmail = generateRandomEmail();
(function(apiKey){
    function generateRandomId() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
        for (let i = 0; i < 9; i++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return id;
    }
    const randomVisitorId = generateRandomId();
    const randomAccountId = generateRandomId();
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
        // Call this whenever information about your visitors becomes available
        // Please use Strings, Numbers, or Bools for value types.
        pendo.initialize({
            visitor: {
                id:              randomVisitorId ,  // Replaced with random visitor ID
                first_name: randomName,
                email:        randomEmail
                // full_name:    // Recommended if using Pendo Feedback
                // role:         // Optional
                // You can add any additional visitor level key-values here,
                // as long as it's not one of the above reserved names.
            },
            account: {
                id:           randomAccountId, // Replaced with random account ID
                name:         'Angus Account'
                // name:         // Optional
                // is_paying:    // Recommended if using Pendo Feedback
                // monthly_value:// Recommended if using Pendo Feedback
                // planLevel:    // Optional
                // planPrice:    // Optional
                // creationDate: // Optional
                // You can add any additional account level key-values here,
                // as long as it's not one of the above reserved names.
            }
        });
})('d084d4af-be6f-4e04-777d-be383c5ee49f');
