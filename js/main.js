let btn = document.querySelector('.btn').addEventListener('click', searchAirport)
let info = document.querySelector('.infoHere')
let item,lInfo;
let list = document.querySelector('.listHere')
function searchAirport () {
list.classList.add('listHere--active')
	
	let input = document.querySelector('.input').value
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'airport-info.p.rapidapi.com',
			'X-RapidAPI-Key': '4d6ecc08fbmsh4b36dbb74d831efp15fe8ajsn9f92fe369271'
		}
	};
	
	fetch(`https://airport-info.p.rapidapi.com/airport?icao=${input}`, options)
		.then(res => res.json())
		.then(data => {
			console.log(data);
				lInfo = `
				<li>IATA code: ${data.iata}</li>
				<li>Name: ${data.name}</li>
				<li>Location: ${data.location}</li>
				<li>Country: ${data.country}</li>
				<li>Latitude: ${data.latitude}</li>
				<li>Longitude: ${data.longitude}</li>
				<li>Handler's site: <a href='${data.website}'>${data.website}</a></li>			
				`

					list.innerHTML = lInfo
		})
		.catch(err => console.error(err));
}