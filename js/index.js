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

//sections
const teamInfo = document.getElementById('team-info');
const teamStadium = document.getElementById('team-stadium');
const playerCardContainer= document.querySelector('.player-card-container');

//This returns Peru National Team information
async function getPeruvianTeamInfo() {
    try {
        const response = await fetch("https://v3.football.api-sports.io/teams?id=30", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "ee2671c057388eed73c0832729ea0572"
            }
        });

        if (!response.ok) {
            throw new Error(response.status);
        }

        const data = await response.json();

        //data points    
        const title = data.response[0].team.name;
        const country = data.response[0].team.country;
        const founded = data.response[0].team.founded;
        const logo = data.response[0].team.logo;
        const stadiumName = data.response[0].venue.name;
        const stadiumAddress = data.response[0].venue.address;
        const stadiumCity = data.response[0].venue.city;
        const stadiumCapacity = data.response[0].venue.capacity;
        const stadiumSurface = data.response[0].venue.surface;
        const stadiumImage = data.response[0].venue.image;
        
        //content for #team-info section
        const teamContentContainer = document.createElement('div')
        const teamImageContainer = document.createElement('div')
        const titleH2 = document.createElement('h2');
        const newPcountry = document.createElement('p');
        const newPcity = document.createElement('p');
        const newPfounded = document.createElement('p');
        const imageLogo = document.createElement('img');
        titleH2.innerHTML = `National soccer team of: ${title}`;
        newPcity.innerHTML = `Located in the city of: ${stadiumCity}`;
        newPcountry.innerHTML = `and country of: ${country}`;
        newPfounded.innerHTML = `The Peru National Soccer Team was founded on: ${founded}`;
        imageLogo.src = `${logo}`;

        teamContentContainer.appendChild(titleH2);
        teamContentContainer.appendChild(newPcity);
        teamContentContainer.appendChild(newPcountry);
        teamContentContainer.appendChild(newPfounded);
        teamImageContainer.appendChild(imageLogo);
        teamInfo.appendChild(teamContentContainer);
        teamInfo.appendChild(teamImageContainer);

        //content for #team-stadium section
        const stadiumContentContainer = document.createElement('div');
        const stadiumImageContainer = document.createElement('div');
        const stadiumTitle = document.createElement('h2');
        const stadiumPname = document.createElement('p');
        const stadiumPaddress = document.createElement('p');
        const stadiumPcapacity = document.createElement('p');
        const stadiumPsurface = document.createElement('p');
        const stadiumImg = document.createElement('img');
        stadiumTitle.innerHTML = "STADIUM";
        stadiumPname.innerHTML = `Name: ${stadiumName}`;
        stadiumPaddress.innerHTML = `Address: ${stadiumAddress}, ${stadiumCity}`;
        stadiumPcapacity.innerHTML = `The stadium has a capacity for ${stadiumCapacity} seats`;
        stadiumPsurface.innerHTML = `Type of surface: ${stadiumSurface}`;
        stadiumImg.src = `${stadiumImage}`;

        stadiumContentContainer.appendChild(stadiumTitle);
        stadiumContentContainer.appendChild(stadiumPname);
        stadiumContentContainer.appendChild(stadiumPaddress);
        stadiumContentContainer.appendChild(stadiumPcapacity);
        stadiumContentContainer.appendChild(stadiumPsurface);
        stadiumImageContainer.appendChild(stadiumImg);
        teamStadium.appendChild(stadiumContentContainer);
        teamStadium.appendChild(stadiumImageContainer);

    } catch (error) {
        console.log('new error:', error);
    }
}

//This returns a list of players from The Peruvian National Team
async function getPlayersInfo () {
    try {
        const response = await fetch("https://v3.football.api-sports.io/players/squads?team=30", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "ee2671c057388eed73c0832729ea0572"
            }
        });

        if (!response.ok) {
            throw new Error(response.status);
        }

        const data = await response.json();

        // Content for #team-players section
        

        for (let i = 0; i < data.response[0].players.length; i++) {
            //data points
            const dataPlayerName = data.response[0].players[i].name;
            const dataPlayerAge = data.response[0].players[i].age;
            const dataPlayerNumber = data.response[0].players[i].number;
            const dataPlayerPosition = data.response[0].players[i].position;
            const dataPlayerPhoto = data.response[0].players[i].photo;

            //content for .playerCard
            const playerName = document.createElement('h3');
            const playerAge = document.createElement('p');
            const playerNumber = document.createElement('p');
            const playerPosition = document.createElement('p');
            const playerPhoto = document.createElement('img');
            const playerCard = document.createElement('div');
            playerCard.classList.add('player-card');
            playerName.innerHTML = `${dataPlayerName}`;
            playerAge.innerHTML = `Age: ${dataPlayerAge}`;
            playerNumber.innerHTML = `Jersey number: ${dataPlayerNumber}`;
            playerPosition.innerHTML = `Position: ${dataPlayerPosition}`;
            playerPhoto.src = `${dataPlayerPhoto}`;

            playerCard.append(playerPhoto);
            playerCard.append(playerName);
            playerCard.append(playerAge);
            playerCard.append(playerNumber);
            playerCard.append(playerPosition);

            playerCardContainer.append(playerCard);
        }

    } catch (error) {
        console.log(error);
    }
}

getPlayersInfo();
getPeruvianTeamInfo();