(async function() {
	const protocol = window.location.protocol === 'https' ? 'https' : 'http';
	const API_URL = '//worldcup.sfg.io/teams/results';

	const response = await fetch(`${protocol}:${API_URL}`);
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

		const colCells = document.querySelectorAll(`tbody tr td:nth-child(${i + 2})`);

		for (var j = 0; j < colCells.length; j++) {
			const cell = colCells[j];

			if (cell.classList.contains('table-success') && parseInt(cell.innerHTML, 10) > 0) {
				total += parseInt(cell.innerHTML, 10);
			}
		}

		totalCell.innerHTML = total;
	}
})();
