(async function() {
	const API_URL = 'https://worldcup.sfg.io/teams/results';

	const response = await fetch(API_URL);
	const results = await response.json();

	console.log(results);

	results.forEach(result => {
		const cells = document.querySelectorAll(`[data-country="${result.country}"] td`);

		for (var i = 0; i < cells.length; i++) {
			const cell = cells[i];

			cell.innerHTML = result.wins * 5 + result.draws * 2;
		}
	});

	const totalCells = document.querySelectorAll(`[data-total]`);

	for (var i = 0; i < totalCells.length; i++) {
		let total = 0;
		const totalCell = totalCells[i];

		const colCells = document.querySelectorAll(`tbody tr td:nth-child(${i})`);

		for (var j = 0; j < colCells.length; j++) {
			if (parseInt(colCells.innerHTML, 10) > 0) {
				total += parseInt(colCells.innerHTML, 10);
			}
		}

		totalCell.innerHTML = total;
	}
})();
