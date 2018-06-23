const API_URL = 'https://world-cup-json.herokuapp.com/teams/results';
const LOCAL_STORAGE_TEAMS_KEY = 'getTeamsJson';

const data = {
	"teams": {
		"Argentina": "🇦🇷 Argentina", "Australia": "🇦🇺 Australia", "Belgium": "🇧🇪 Belgium", "Brazil": "🇧🇷 Brazil", "Colombia": "🇨🇴 Colombia", "Costa Rica": "🇨🇷 Costa Rica", "Croatia": "🇭🇷 Croatia", "Denmark": "🇩🇰 Denmark", "Egypt": "🇪🇬 Egypt", "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", "France": "🇫🇷 France", "Germany": "🇩🇪 Germany", "Iceland": "🇮🇸 Iceland", "Iran": "🇮🇷 Iran", "Japan": "🇯🇵 Japan", "Mexico": "🇲🇽 Mexico", "Morocco": "🇲🇦 Morocco", "Nigeria": "🇳🇬 Nigeria", "Panama": "🇵🇦 Panama", "Peru": "🇵🇪 Peru", "Poland": "🇵🇱 Poland", "Portugal": "🇵🇹 Portugal", "Russia": "🇷🇺 Russia", "Saudi Arabia": "🇸🇦 Saudi Arabia", "Senegal": "🇸🇳 Senegal", "Serbia": "🇷🇸 Serbia", "Korea Republic": "🇰🇷 South Korea", "Spain": "🇪🇸 Spain", "Sweden": "🇸🇪 Sweden", "Switzerland": "🇨🇭 Switzerland", "Tunisia": "🇹🇳 Tunisia", "Uruguay": "🇺🇾 Uruguay" 	},
	"players": [
		{ "name": "Chris P.", "teams": [ "Brazil", "Colombia", "Denmark", "France", "Iran", "Panama", "Poland", "Portugal", "Russia", "Saudi Arabia", "Spain", "Tunisia" ], "points": 0 },
		{ "name": "Ruben C.", "teams": [ "Argentina", "Australia", "Brazil", "Colombia", "Mexico", "Panama", "Portugal", "Saudi Arabia", "Serbia", "Spain", "Tunisia", "Uruguay" ], "points": 0 },
		{ "name": "Ashleigh S.", "teams": [ "Belgium", "Colombia", "Denmark", "Germany", "Iceland", "Morocco", "Panama", "Portugal", "Russia", "Senegal", "Serbia", "Uruguay" ], "points": 0 },
		{ "name": "Lars A.", "teams": [ "Belgium", "Brazil", "Croatia", "France", "Germany", "Iran", "Panama", "Saudi Arabia", "Senegal", "Korea Republic", "Tunisia", "Uruguay" ], "points": 0 },
		{ "name": "Heather D.", "teams": [ "England", "France", "Germany", "Iceland", "Nigeria", "Panama", "Poland", "Saudi Arabia", "Spain", "Sweden", "Switzerland", "Tunisia" ], "points": 0 },
		{ "name": "Stephanie L.", "teams": [ "Argentina", "Colombia", "Costa Rica", "Egypt", "Germany", "Iceland", "Iran", "Mexico", "Morocco", "Peru", "Spain", "Uruguay" ], "points": 0 },
		{ "name": "Ron D.", "teams": [ "Australia", "Belgium", "Colombia", "Croatia", "Iceland", "Mexico", "Poland", "Portugal", "Serbia", "Sweden", "Switzerland", "Uruguay" ], "points": 0 },
		{ "name": "Mike W.", "teams": [ "Argentina", "Belgium", "Costa Rica", "Egypt", "France", "Germany", "Iran", "Panama", "Portugal", "Saudi Arabia", "Tunisia", "Uruguay" ], "points": 0 },
		{ "name": "Simon B.", "teams": [ "Belgium", "Colombia", "Costa Rica", "Croatia", "Egypt", "France", "Germany", "Morocco", "Peru", "Senegal", "Switzerland", "Tunisia" ], "points": 0 },
		{ "name": "Catherine W.", "teams": [ "Argentina", "Brazil", "Costa Rica", "England", "Mexico", "Morocco", "Nigeria", "Peru", "Portugal", "Senegal", "Tunisia", "Uruguay" ], "points": 0 },
		{ "name": "Day K.", "teams": [ "Argentina", "Australia", "Brazil", "Costa Rica", "Denmark", "England", "Iceland", "Japan", "Mexico", "Portugal", "Russia", "Korea Republic" ], "points": 0 },
		{ "name": "Mark Buchmann", "teams": [ "Australia", "Brazil", "Costa Rica", "France", "Germany", "Iceland", "Japan", "Panama", "Korea Republic", "Spain", "Tunisia", "Uruguay" ], "points": 0 },
		{ "name": "Charlotte B.", "teams": [ "Argentina", "Australia", "England", "Germany", "Iceland", "Iran", "Japan", "Portugal", "Russia", "Sweden", "Tunisia", "Uruguay" ], "points": 0 },
		{ "name": "Tiffanie C.", "teams": [ "Argentina", "Australia", "Brazil", "Egypt", "France", "Japan", "Panama", "Peru", "Portugal", "Saudi Arabia", "Switzerland", "Uruguay" ], "points": 0 },
		{ "name": "Pablo R.", "teams": [ "Belgium", "Brazil", "France", "Iceland", "Iran", "Mexico", "Peru", "Portugal", "Saudi Arabia", "Senegal", "Tunisia", "Uruguay" ], "points": 0 },
		{ "name": "Jan G. 1", "teams": [ "Argentina", "Australia", "Brazil", "Costa Rica", "Denmark", "Germany", "Iran", "Japan", "Panama", "Korea Republic", "Spain", "Uruguay" ], "points": 0 },
		{ "name": "Jan G. 2", "teams": [ "Argentina", "Belgium", "Colombia", "Costa Rica", "Croatia", "Denmark", "Iran", "Japan", "Mexico", "Portugal", "Switzerland", "Uruguay" ], "points": 0 },
		{ "name": "Anjan S.", "teams": [ "Argentina", "Australia", "Belgium", "Brazil", "Costa Rica", "France", "Germany", "Japan", "Nigeria", "Panama", "Saudi Arabia", "Korea Republic" ], "points": 0 },
		{ "name": "Chris S.", "teams": [ "Brazil", "Croatia", "Denmark", "France", "Germany", "Iran", "Japan", "Nigeria", "Panama", "Senegal", "Korea Republic", "Uruguay" ], "points": 0 },
		{ "name": "Aaron L.", "teams": [ "Argentina", "Belgium", "Germany", "Iceland", "Panama", "Peru", "Poland", "Portugal", "Saudi Arabia", "Korea Republic", "Switzerland", "Uruguay" ], "points": 0 },
		{ "name": "Vaidas M.", "teams": [ "Brazil", "Costa Rica", "Germany", "Mexico", "Morocco", "Nigeria", "Portugal", "Russia", "Saudi Arabia", "Senegal", "Spain", "Tunisia" ], "points": 0 },
		{ "name": "Steen R.", "teams": [ "Belgium", "Colombia", "Croatia", "Denmark", "Germany", "Mexico", "Panama", "Peru", "Portugal", "Saudi Arabia", "Serbia", "Switzerland" ], "points": 0 },
		{ "name": "Chris A.", "teams": [ "Argentina", "Australia", "Costa Rica", "Croatia", "England", "France", "Germany", "Japan", "Mexico", "Morocco", "Poland", "Saudi Arabia" ], "points": 0 },
		{ "name": "Caterina S.", "teams": [ "Brazil", "Colombia", "Croatia", "Denmark", "Egypt", "Germany", "Mexico", "Morocco", "Nigeria", "Panama", "Senegal", "Serbia" ], "points": 0 },
		{ "name": "Scott B.", "teams": [ "Australia", "Colombia", "Croatia", "England", "Germany", "Iceland", "Japan", "Mexico", "Poland", "Portugal", "Saudi Arabia", "Switzerland" ], "points": 0 },
		{ "name": "Andy H.", "teams": [ "Australia", "Colombia", "Costa Rica", "England", "France", "Germany", "Iceland", "Iran", "Panama", "Russia", "Spain", "Sweden" ], "points": 0 },
		{ "name": "Lauren N.", "teams": [ "Argentina", "Brazil", "Costa Rica", "France", "Germany", "Iran", "Panama", "Poland", "Portugal", "Saudi Arabia", "Korea Republic", "Tunisia" ], "points": 0 },
		{ "name": "Chris L.", "teams": [ "Brazil", "Colombia", "Costa Rica", "France", "Iceland", "Iran", "Mexico", "Peru", "Senegal", "Spain", "Tunisia", "Uruguay" ], "points": 0 },
		{ "name": "Mark Bice", "teams": [ "Australia", "Belgium", "Colombia", "Germany", "Iceland", "Iran", "Mexico", "Peru", "Poland", "Portugal", "Russia", "Switzerland" ], "points": 0 },
		{ "name": "Stefanie L.", "teams": [ "Argentina", "Brazil", "Colombia", "Costa Rica", "Egypt", "France", "Japan", "Mexico", "Morocco", "Panama", "Spain", "Tunisia" ], "points": 0 },
		{ "name": "Tara C.", "teams": [ "Colombia", "Croatia", "Egypt", "France", "Iceland", "Mexico", "Morocco", "Portugal", "Senegal", "Serbia", "Korea Republic", "Spain" ], "points": 0 },
		{ "name": "Avery D.", "teams": [ "Brazil", "France", "England", "Uruguay", "Croatia", "Colombia", "Mexico", "Serbia", "Iceland", "Korea Republic", "Iran", "Saudi Arabia" ], "points": 0 }
	]
};

function getItem() {
	const now = new Date().getTime();

	const storedItemStringified = localStorage.getItem(LOCAL_STORAGE_TEAMS_KEY);
	const storedItem = JSON.parse(storedItemStringified);

	if (storedItem && storedItem.expiryDate > now && storedItem.response) {
		return storedItem.response;
	}

	return null;
}

function setItem(responseJson) {
	const now = new Date().getTime();
	const delay = 1000 * 10; // 10 seconds

	const storedItem = {
		response: responseJson,
		expiryDate: now + delay
	};

	localStorage.setItem(LOCAL_STORAGE_TEAMS_KEY, JSON.stringify(storedItem));
}

async function getTeams() {
	const storedItem = getItem();

	if (storedItem) {
		return storedItem;
	}

	const response = await fetch(API_URL);
	responseJson = await response.json();

	setItem(responseJson);

	return responseJson;
}

function getPoints(team) {
	return team.wins * 5 + team.draws * 2;
}

function sortTeams(a, b) {
	return getPoints(b) - getPoints(a);
}

function sortPlayers(a, b) {
	// Knockout stage - by total points
	// return b.points - a.points;

	// Group stage - by points per game
	return (b.points / b.gamesPlayed) - (a.points / a.gamesPlayed);
}

function generatePoints(team) {
	data.players.forEach(player => {
		if (!player.points) {
			player.points = 0;
		}

		if (!player.gamesPlayed) {
			player.gamesPlayed = 0;
		}

		if (player.teams.indexOf(team.country) > -1) {
			player.points += team.wins * 5 + team.draws * 2;
			player.gamesPlayed += team.wins + team.draws + team.losses;
		}
	});
}

function generateHtml(teams, players) {
	const thead = document.querySelector('thead');

	const playerRow = document.createElement('tr');
	playerRow.innerHTML = `<th scope="col"><span>Team</span></th>`;
	playerRow.innerHTML = players.reduce((html, player) => {
		return `${html}<th><span>${player.name}</span></th>`;
	}, playerRow.innerHTML);
	thead.appendChild(playerRow);

	const totalRow = document.createElement('tr');
	totalRow.innerHTML = `<th scope="col"><span>Total points</span></th>`;
	totalRow.innerHTML = players.reduce((html, player) => {
		return `${html}<th><span>${player.points}</span></th>`;
	}, totalRow.innerHTML);
	thead.appendChild(totalRow);

	const gamesPlayedRow = document.createElement('tr');
	gamesPlayedRow.innerHTML = `<th scope="col"><span>Games played</span></th>`;
	gamesPlayedRow.innerHTML = players.reduce((html, player) => {
		return `${html}<th><small>${player.gamesPlayed}</small></th>`;
	}, gamesPlayedRow.innerHTML);
	thead.appendChild(gamesPlayedRow);

	const pointsPerGameRow = document.createElement('tr');
	pointsPerGameRow.innerHTML = `<th scope="col"><span>Points per game</span></th>`;
	pointsPerGameRow.innerHTML = players.reduce((html, player) => {
		return `${html}<th><small>${(player.points / player.gamesPlayed).toFixed(2)}</small></th>`;
	}, pointsPerGameRow.innerHTML);
	thead.appendChild(pointsPerGameRow);

	const body = document.querySelector('tbody');
	const bodyHTML = teams.reduce((previousRow, team) => {
		let html = previousRow + `<tr><th><span>${data.teams[team.country]}</span></th>`;

		players.forEach(player => {
			if (player.teams.indexOf(team.country) > -1) {
				html += `<td class="table-success"><span>${getPoints(team)}</span></td>`;
			} else {
				html += `<td class="table-null"><span>0</span></td>`;
			}
		});

		html += '</tr>';

		return html;
	}, '');
	body.innerHTML = bodyHTML;
}

(async function() {
	let teams = await getTeams();

	teams = teams.sort(sortTeams);
	teams.forEach(generatePoints);

	data.players = data.players.sort(sortPlayers);

	generateHtml(teams, data.players);
})();
