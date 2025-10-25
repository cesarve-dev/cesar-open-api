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

const API_KEY = "ee2671c057388eed73c0832729ea0572";
const API_HOST = "v3.football.api-sports.io"

//sections
const teamInfo = document.getElementById('team-info');
const teamStadium = document.getElementById('team-stadium');
const teamPlayers = document.getElementById('team-players');
const playerCardContainer= document.querySelector('.player-card-container');

//This returns Peru National Team information
async function getPeruvianTeamInfo() {
    try {
        teamInfo.innerHTML = "";
        teamStadium.innerHTML = "";

        const response = await fetch("https://v3.football.api-sports.io/teams?id=30", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": API_HOST,
                "x-rapidapi-key": API_KEY
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
        const teamTitle = document.createElement('h2');
        const countryParagraph = document.createElement('p');
        const cityParagraph = document.createElement('p');
        const foundedParagraph = document.createElement('p');
        const imageLogo = document.createElement('img');
        teamTitle.innerHTML = `National soccer team of: ${title}`;
        cityParagraph.innerHTML = `Located in the city of: ${stadiumCity}`;
        countryParagraph.innerHTML = `and country of: ${country}`;
        foundedParagraph.innerHTML = `The Peru National Soccer Team was founded on: ${founded}`;
        imageLogo.src = `${logo}`;

        teamContentContainer.append(
            teamTitle,
            cityParagraph,
            countryParagraph,
            foundedParagraph
        );

        teamImageContainer.appendChild(imageLogo);

        teamInfo.append(teamContentContainer, teamImageContainer);

        //content for #team-stadium section
        const stadiumContentContainer = document.createElement('div');
        const stadiumImageContainer = document.createElement('div');
        const stadiumTitle = document.createElement('h2');
        const stadiumNameParagraph = document.createElement('p');
        const stadiumAddressParagraph = document.createElement('p');
        const stadiumCapacityParagraph = document.createElement('p');
        const stadiumSurfaceParagraph = document.createElement('p');
        const stadiumImg = document.createElement('img');
        stadiumTitle.innerHTML = "STADIUM";
        stadiumNameParagraph.innerHTML = `Name: ${stadiumName}`;
        stadiumAddressParagraph.innerHTML = `Address: ${stadiumAddress}, ${stadiumCity}`;
        stadiumCapacityParagraph.innerHTML = `The stadium has a capacity for ${stadiumCapacity} seats`;
        stadiumSurfaceParagraph.innerHTML = `Type of surface: ${stadiumSurface}`;
        stadiumImg.src = `${stadiumImage}`;

        stadiumContentContainer.append(
            stadiumTitle,
            stadiumNameParagraph,
            stadiumAddressParagraph,
            stadiumCapacityParagraph,
            stadiumSurfaceParagraph
        );

        stadiumImageContainer.appendChild(stadiumImg);

        teamStadium.append(stadiumContentContainer, stadiumImageContainer);

    } catch (error) {
        console.error('new error:', error);
    }
}

//This returns a list of players from The Peruvian National Team
async function getPlayersInfo () {
    try {
        playerCardContainer.innerHTML = "";
        const response = await fetch("https://v3.football.api-sports.io/players/squads?team=30", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": API_HOST,
                "x-rapidapi-key": API_KEY
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

            playerCard.append(
                playerPhoto,
                playerName,
                playerAge,
                playerNumber,
                playerPosition
            );

            playerCardContainer.append(playerCard);
        }

    } catch (error) {
        console.error(error);
    }
}

const stadiumButton = document.querySelector('#stadiumBtn');
const teamButton = document.querySelector('#teamBtn');

stadiumButton.addEventListener('click', async (event) => {
    event.preventDefault();
    teamPlayers.style.display = "none";
    teamStadium.style.display = 'flex';
    await getPeruvianTeamInfo(); // already called, why call it again?
})

teamButton.addEventListener('click', async (event) => {
    event.preventDefault();
    teamStadium.style.display = 'none';
    teamPlayers.style.display = 'block';
    await getPlayersInfo();
})

getPeruvianTeamInfo();