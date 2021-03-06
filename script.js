//@ts-check

const data = {
	"teams": {
		"Argentina": { country: "Argentina", displayName: "🇦🇷 Argentina", cost: "14", stillIn: false, wins: 1, draws: 1, projectedPoints: 0 },
		"Australia": { country: "Australia", displayName: "🇦🇺 Australia", cost: "3", stillIn: false, wins: 0, draws: 1, projectedPoints: 0 },
		"Belgium": { country: "Belgium", displayName: "🇧🇪 Belgium", cost: "14", stillIn: false, wins: 6, draws: 0, projectedPoints: 0 },
		"Brazil": { country: "Brazil", displayName: "🇧🇷 Brazil", cost: "18", stillIn: false, wins: 3, draws: 1, projectedPoints: 0 },
		"Colombia": { country: "Colombia", displayName: "🇨🇴 Colombia", cost: "8", stillIn: false, wins: 2, draws: 0, projectedPoints: 0 },
		"Costa Rica": { country: "Costa Rica", displayName: "🇨🇷 Costa Rica", cost: "3", stillIn: false, wins: 0, draws: 1, projectedPoints: 0 },
		"Croatia": { country: "Croatia", displayName: "🇭🇷 Croatia", cost: "9", stillIn: false, wins: 6, draws: 0, projectedPoints: 0 },
		"Denmark": { country: "Denmark", displayName: "🇩🇰 Denmark", cost: "8", stillIn: false, wins: 1, draws: 2, projectedPoints: 0 },
		"Egypt": { country: "Egypt", displayName: "🇪🇬 Egypt", cost: "7", stillIn: false, wins: 0, draws: 0, projectedPoints: 0 },
		"England": { country: "England", displayName: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", cost: "13", stillIn: false, wins: 4, draws: 0, projectedPoints: 0 },
		"France": { country: "France", displayName: "🇫🇷 France", cost: "16", stillIn: true, wins: 6, draws: 1, projectedPoints: 0 },
		"Germany": { country: "Germany", displayName: "🇩🇪 Germany", cost: "18", stillIn: false, wins: 1, draws: 0, projectedPoints: 0 },
		"Iceland": { country: "Iceland", displayName: "🇮🇸 Iceland", cost: "5", stillIn: false, wins: 0, draws: 1, projectedPoints: 0 },
		"Iran": { country: "Iran", displayName: "🇮🇷 Iran", cost: "2", stillIn: false, wins: 1, draws: 1, projectedPoints: 0 },
		"Japan": { country: "Japan", displayName: "🇯🇵 Japan", cost: "4", stillIn: false, wins: 1, draws: 1, projectedPoints: 0 },
		"Mexico": { country: "Mexico", displayName: "🇲🇽 Mexico", cost: "8", stillIn: false, wins: 2, draws: 0, projectedPoints: 0 },
		"Morocco": { country: "Morocco", displayName: "🇲🇦 Morocco", cost: "3", stillIn: false, wins: 0, draws: 1, projectedPoints: 0 },
		"Nigeria": { country: "Nigeria", displayName: "🇳🇬 Nigeria", cost: "5", stillIn: false, wins: 1, draws: 0, projectedPoints: 0 },
		"Panama": { country: "Panama", displayName: "🇵🇦 Panama", cost: "1", stillIn: false, wins: 0, draws: 0, projectedPoints: 0 },
		"Peru": { country: "Peru", displayName: "🇵🇪 Peru", cost: "6", stillIn: false, wins: 1, draws: 0, projectedPoints: 0 },
		"Poland": { country: "Poland", displayName: "🇵🇱 Poland", cost: "8", stillIn: false, wins: 1, draws: 0, projectedPoints: 0 },
		"Portugal": { country: "Portugal", displayName: "🇵🇹 Portugal", cost: "12", stillIn: false, wins: 1, draws: 2, projectedPoints: 0 },
		"Russia": { country: "Russia", displayName: "🇷🇺 Russia", cost: "8", stillIn: false, wins: 3, draws: 0, projectedPoints: 0 },
		"Saudi Arabia": { country: "Saudi Arabia", displayName: "🇸🇦 Saudi Arabia", cost: "1", stillIn: false, wins: 1, draws: 0, projectedPoints: 0 },
		"Senegal": { country: "Senegal", displayName: "🇸🇳 Senegal", cost: "6", stillIn: false, wins: 1, draws: 1, projectedPoints: 0 },
		"Serbia": { country: "Serbia", displayName: "🇷🇸 Serbia", cost: "7", stillIn: false, wins: 1, draws: 0, projectedPoints: 0 },
		"Korea Republic": { country: "Korea Republic", displayName: "🇰🇷 South Korea", cost: "3", stillIn: false, wins: 1, draws: 0, projectedPoints: 0 },
		"Spain": { country: "Spain", displayName: "🇪🇸 Spain", cost: "16", stillIn: false, wins: 1, draws: 2, projectedPoints: 0 },
		"Sweden": { country: "Sweden", displayName: "🇸🇪 Sweden", cost: "7", stillIn: false, wins: 3, draws: 0, projectedPoints: 0 },
		"Switzerland": { country: "Switzerland", displayName: "🇨🇭 Switzerland", cost: "8", stillIn: false, wins: 1, draws: 2, projectedPoints: 0 },
		"Tunisia": { country: "Tunisia", displayName: "🇹🇳 Tunisia", cost: "2", stillIn: false, wins: 1, draws: 0, projectedPoints: 0 },
		"Uruguay": { country: "Uruguay", displayName: "🇺🇾 Uruguay", cost: "10", stillIn: false, wins: 4, draws: 0, projectedPoints: 0 },
	},
	"players": [
		{ "name": "Chris P.", "teams": [ "Brazil", "Colombia", "Denmark", "France", "Iran", "Panama", "Poland", "Portugal", "Russia", "Saudi Arabia", "Spain", "Tunisia" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Ruben C.", "teams": [ "Argentina", "Australia", "Brazil", "Colombia", "Mexico", "Panama", "Portugal", "Saudi Arabia", "Serbia", "Spain", "Tunisia", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Ashleigh S.", "teams": [ "Belgium", "Colombia", "Denmark", "Germany", "Iceland", "Morocco", "Panama", "Portugal", "Russia", "Senegal", "Serbia", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Lars A.", "teams": [ "Belgium", "Brazil", "Croatia", "France", "Germany", "Iran", "Panama", "Saudi Arabia", "Senegal", "Korea Republic", "Tunisia", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Heather D.", "teams": [ "England", "France", "Germany", "Iceland", "Nigeria", "Panama", "Poland", "Saudi Arabia", "Spain", "Sweden", "Switzerland", "Tunisia" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Stephanie L.", "teams": [ "Argentina", "Colombia", "Costa Rica", "Egypt", "Germany", "Iceland", "Iran", "Mexico", "Morocco", "Peru", "Spain", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Ron D.", "teams": [ "Australia", "Belgium", "Colombia", "Croatia", "Iceland", "Mexico", "Poland", "Portugal", "Serbia", "Sweden", "Switzerland", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Mike W.", "teams": [ "Argentina", "Belgium", "Costa Rica", "Egypt", "France", "Germany", "Iran", "Panama", "Portugal", "Saudi Arabia", "Tunisia", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Simon B.", "teams": [ "Belgium", "Colombia", "Costa Rica", "Croatia", "Egypt", "France", "Germany", "Morocco", "Peru", "Senegal", "Switzerland", "Tunisia" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Catherine W.", "teams": [ "Argentina", "Brazil", "Costa Rica", "England", "Mexico", "Morocco", "Nigeria", "Peru", "Portugal", "Senegal", "Tunisia", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Day K.", "teams": [ "Argentina", "Australia", "Brazil", "Costa Rica", "Denmark", "England", "Iceland", "Japan", "Mexico", "Portugal", "Russia", "Korea Republic" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Mark Buchmann", "teams": [ "Australia", "Brazil", "Costa Rica", "France", "Germany", "Iceland", "Japan", "Panama", "Korea Republic", "Spain", "Tunisia", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Charlotte B.", "teams": [ "Argentina", "Australia", "England", "Germany", "Iceland", "Iran", "Japan", "Portugal", "Russia", "Sweden", "Tunisia", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Tiffanie C.", "teams": [ "Argentina", "Australia", "Brazil", "Egypt", "France", "Japan", "Panama", "Peru", "Portugal", "Saudi Arabia", "Switzerland", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Pablo R.", "teams": [ "Belgium", "Brazil", "France", "Iceland", "Iran", "Mexico", "Peru", "Portugal", "Saudi Arabia", "Senegal", "Tunisia", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Jan G. 1", "teams": [ "Argentina", "Australia", "Brazil", "Costa Rica", "Denmark", "Germany", "Iran", "Japan", "Panama", "Korea Republic", "Spain", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Jan G. 2", "teams": [ "Argentina", "Belgium", "Colombia", "Costa Rica", "Croatia", "Denmark", "Iran", "Japan", "Mexico", "Portugal", "Switzerland", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Anjan S.", "teams": [ "Argentina", "Australia", "Belgium", "Brazil", "Costa Rica", "France", "Germany", "Japan", "Nigeria", "Panama", "Saudi Arabia", "Korea Republic" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Chris S.", "teams": [ "Brazil", "Croatia", "Denmark", "France", "Germany", "Iran", "Japan", "Nigeria", "Panama", "Senegal", "Korea Republic", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Aaron L.", "teams": [ "Argentina", "Belgium", "Germany", "Iceland", "Panama", "Peru", "Poland", "Portugal", "Saudi Arabia", "Korea Republic", "Switzerland", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Vaidas M.", "teams": [ "Brazil", "Costa Rica", "Germany", "Mexico", "Morocco", "Nigeria", "Portugal", "Russia", "Saudi Arabia", "Senegal", "Spain", "Tunisia" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Steen R.", "teams": [ "Belgium", "Colombia", "Croatia", "Denmark", "Germany", "Mexico", "Panama", "Peru", "Portugal", "Saudi Arabia", "Serbia", "Switzerland" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Chris A.", "teams": [ "Argentina", "Australia", "Costa Rica", "Croatia", "England", "France", "Germany", "Japan", "Mexico", "Morocco", "Poland", "Saudi Arabia" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Caterina S.", "teams": [ "Brazil", "Colombia", "Croatia", "Denmark", "Egypt", "Germany", "Mexico", "Morocco", "Nigeria", "Panama", "Senegal", "Serbia" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Scott B.", "teams": [ "Australia", "Colombia", "Croatia", "England", "Germany", "Iceland", "Japan", "Mexico", "Poland", "Portugal", "Saudi Arabia", "Switzerland" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Andy H.", "teams": [ "Australia", "Colombia", "Costa Rica", "England", "France", "Germany", "Iceland", "Iran", "Panama", "Russia", "Spain", "Sweden" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Lauren N.", "teams": [ "Argentina", "Brazil", "Costa Rica", "France", "Germany", "Iran", "Panama", "Poland", "Portugal", "Saudi Arabia", "Korea Republic", "Tunisia" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Chris L.", "teams": [ "Brazil", "Colombia", "Costa Rica", "France", "Iceland", "Iran", "Mexico", "Peru", "Senegal", "Spain", "Tunisia", "Uruguay" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Mark Bice", "teams": [ "Australia", "Belgium", "Colombia", "Germany", "Iceland", "Iran", "Mexico", "Peru", "Poland", "Portugal", "Russia", "Switzerland" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Stefanie L.", "teams": [ "Argentina", "Brazil", "Colombia", "Costa Rica", "Egypt", "France", "Japan", "Mexico", "Morocco", "Panama", "Spain", "Tunisia" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Tara C.", "teams": [ "Colombia", "Croatia", "Egypt", "France", "Iceland", "Mexico", "Morocco", "Portugal", "Senegal", "Serbia", "Korea Republic", "Spain" ], "points": 0, "projectedPoints": 0 },
		{ "name": "Avery D.", "teams": [ "Brazil", "France", "England", "Uruguay", "Croatia", "Colombia", "Mexico", "Serbia", "Iceland", "Korea Republic", "Iran", "Saudi Arabia" ], "points": 0, "projectedPoints": 0 },
	]
};

async function getTeams() {
	const teams = [];

	for (let i in data.teams) {
		teams.push(data.teams[i]);
	}

	return teams;
}

function sortTeams(a, b) {
	return b.points - a.points;
}

function sortPlayers(a, b) {
	// Knockout stage - by total points
	return b.points - a.points;
}

function sortPlayersByProjectedPoints(a, b) {
	return b.projectedPoints - a.projectedPoints;
}

/**
 * @param {Array} players
 */
function addProjectedPointsPlacement(players) {
	players = players.sort(sortPlayersByProjectedPoints);
	players.filter(p => p.name != "Best team").forEach((player, index) => {
		player.projectedPointsPlacement = index + 1;
	});
}

function generateTeamPointsCost(team) {
	team.points = team.wins * 5 + team.draws * 2;
	team.projectedPoints = team.projectedPoints + team.points;
}

function getBestTeam(teams) {
	const solution = knapsack(teams, 100).subset;

	return {
		name: "Best team",
		points: 0,
		projectedPoints: 0,
		gamesPlayed: 0,
		teams: solution.map(t => t.country)
	}
}

function knapsack (items, capacity) {
	// This implementation uses dynamic programming.
	// Variable 'memo' is a grid(2-dimentional array) to store optimal solution for sub-problems,
	// which will be later used as the code execution goes on.
	// This is called memoization in programming.
	// The cell will store best solution objects for different capacities and selectable items.
	var memo = [];

	// Filling the sub-problem solutions grid.
	for (var i = 0; i < items.length; i++) {
		// Variable 'cap' is the capacity for sub-problems. In this example, 'cap' ranges from 1 to 6.
		var row = [];

		for (var cap = 1; cap <= capacity; cap++) {
			row.push(getSolution(i, cap));
		}

		memo.push(row);
	}

	// The right-bottom-corner cell of the grid contains the final solution for the whole problem.
	return (getLast());

	function getLast() {
		var lastRow = memo[memo.length - 1];

		return lastRow[lastRow.length - 1];
	}

	function getSolution(row, cap) {
		const NO_SOLUTION = { maxValue: 0, subset:[] };

		// the column number starts from zero.
		var col = cap - 1;
		var lastItem = items[row];

		// The remaining capacity for the sub-problem to solve.
		var remaining = cap - lastItem.cost;

		// Refer to the last solution for this capacity,
		// which is in the cell of the previous row with the same column
		var lastSolution = row > 0 ? memo[row - 1][col] || NO_SOLUTION : NO_SOLUTION;
		// Refer to the last solution for the remaining capacity,
		// which is in the cell of the previous row with the corresponding column
		var lastSubSolution = row > 0 ? memo[row - 1][remaining - 1] || NO_SOLUTION : NO_SOLUTION;

		// If any one of the items weights greater than the 'cap', return the last solution
		if (remaining < 0) {
			return lastSolution;
		}

		// Compare the current best solution for the sub-problem with a specific capacity
		// to a new solution trial with the lastItem(new item) added
		var lastValue = lastSolution.maxValue;
		var lastSubValue = lastSubSolution.maxValue;

		var newValue = lastSubValue + lastItem.points;

		if (newValue >= lastValue && lastSubSolution.subset.length < 12) {
			// copy the subset of the last sub-problem solution
			var _lastSubSet = lastSubSolution.subset.slice();
			_lastSubSet.push(lastItem);

			return { maxValue: newValue, subset:_lastSubSet };
		} else {
			return lastSolution;
		}
	}
}

function generatePlayerPoints(team) {
	data.players.forEach(player => {
		if (!player.points) {
			player.points = 0;
		}

		if (!player.projectedPoints) {
			player.projectedPoints = 0;
		}

		if (!player.gamesPlayed) {
			player.gamesPlayed = 0;
		}

		if (!player.teamsRemaining) {
			player.teamsRemaining = 0;
		}

		if (player.teams.indexOf(team.country) > -1) {
			player.points += team.points;
			player.projectedPoints += team.projectedPoints;
			player.gamesPlayed += team.games_played;

			if (team.stillIn) {
				player.teamsRemaining++;
			}
		}
	});
}

function generateHtml(teams, players) {
	const thead = document.querySelector('thead');

	const placeRow = document.createElement('tr');
	placeRow.innerHTML = `<th scope="col"><span>Place</span></th>`;
	placeRow.innerHTML = players.reduce((html, player) => {
		return `${html}<th><span>${players.indexOf(player) > 0 ? players.indexOf(player) : ''}</span></th>`;
	}, placeRow.innerHTML);
	thead.appendChild(placeRow);

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

	const body = document.querySelector('tbody');
	const bodyHTML = teams.reduce((previousRow, team) => {
		let html = previousRow + `<tr><th><span class="${team.stillIn ? "" : "strikethru"}">${team.displayName}</span></th>`;

		players.forEach(player => {
			if (player.teams.indexOf(team.country) > -1) {
				html += `<td class="${team.stillIn ? "table-success" : "table-warning"}"><span>${team.points}</span></td>`;
			} else {
				html += `<td class="table-null"></td>`;
			}
		});

		html += '</tr>';

		return html;
	}, '');
	body.innerHTML = bodyHTML;
}

async function main () {
	let teams = await getTeams();

	teams.forEach(generateTeamPointsCost);
	teams = teams.sort(sortTeams);

	try {
		const bestTeam = getBestTeam(teams);

		data.players.push(bestTeam);
	} catch (e) {
		console.log(`Failed to generate the best team.`);
	}

	teams.forEach(generatePlayerPoints);

	addProjectedPointsPlacement(data.players);
	data.players = data.players.sort(sortPlayers);

	generateHtml(teams, data.players);

}

main();
