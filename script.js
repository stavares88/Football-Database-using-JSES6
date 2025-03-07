const clubList = document.getElementById('club-list');
const searchInput = document.getElementById('search');
const clubDetailsContainer = document.getElementById('main');
searchInput.addEventListener('input', handleSearchInput);
let clubData = footballClubs; 
displayClubs(footballClubs);


function displayClubs(clubs) {
const clubCardsHTML = clubs.map(createClubCardHTML).join('');
clubList.innerHTML = clubCardsHTML;
}


function createClubCardHTML(club) {
    return `
        <div class="club-card" onclick="handleClubClick(this);"><!-- Add onclick event -->
            <h2>${club.name}</h2>
            <img src="${club.image}" alt="${club.name} Image" style="width:100%; height:20vh;">
            <p><b>League: </b>${club.league}</p>
            <p><b>City: </b>${club.city}</p>
            <button onclick="viewClubPlayers('${club.name}'); event.stopPropagation();" style="width:100%;">View Players</button>
        </div>
    `;
}

function handleClubClick(element) {
    const clubName = Element.dataset.clubName;
        const clubDetails = footballClubDatabase.find(club => club,name === clubName); 
           displayClubDetails(clubDetails); 
    }


function displayClubDetails(club) {
   const clubNameElement = document.querySelector('.club-name');
   const clubLeagueElement = document.querySelector('.club-league');
}



function viewClubPlayers(clubName) { 
const selectedClub = clubData.find(club => club.name === clubName); if (selectedClub) { 
const playerListHTML = selectedClub.players.map(player => 
`<p><b>Name: </b>${player.name}</p>            
<p><b>Position: </b>${player.position}</p>            
<p><b>Goals: </b>${player.goals}</p>            
<p><b>Assists: </b>${player.assists}</p>           
<hr> 
`).join(''); 
clubDetailsContainer.innerHTML = `<button onclick="window.location.reload();">Back</button> 
<h2> ${selectedClub.name} Players</h2>
${playerListHTML}
`;
}

} 

   
function handleSearchInput() {  
    const searchValue = searchInput.value.toLowerCase();  
    const filteredClubs = clubData.filter((club) => {    
        const clubDataString =`${club.name} ${club.league} ${club.city}`.toLowerCase();   
         return clubDataString.includes(searchValue);  
});  

    displayClubs(filteredClubs);

}

