async function getRepositories() {
    try {
        const response = await fetch("https://api.github.com/users/cesarve-dev/repos");
        
        if (!response.ok) {
            throw new Error(response.status);
        } 

        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name)
        }
     } catch (error) {
        console.error('new error:', error);
    }    
}

getRepositories();

//Soccer API

//This returns Peru National Team information
// fetch("https://v3.football.api-sports.io/teams?id=30", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "v3.football.api-sports.io",
// 		"x-rapidapi-key": "ee2671c057388eed73c0832729ea0572"
// 	}
// })
// .then(response => {
// 	returnresponse.json();
// })
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
// 	console.log(err);
// });

//This returns a list of players from The Peruvian National Team
// fetch("https://v3.football.api-sports.io/players/squads?team=30", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "v3.football.api-sports.io",
// 		"x-rapidapi-key": "ee2671c057388eed73c0832729ea0572"
// 	}
// })
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(err);
// })

/* 
Next Steps:
1. think about how do you want to display the information
2. Add css for styling
*/