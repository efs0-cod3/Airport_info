let btn = document.querySelector('.btn').addEventListener('click', searchAirport)
let info = document.querySelector('.infoHere')
let item,lInfo,met;
let list = document.querySelector('.listHere')
let metarInfo = document.querySelector('.metar')
function searchAirport () {
list.classList.add('active')
metarInfo.classList.add('active')
	
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
				lInfo = `
				<li><span>IATA code:</span> ${data.iata}</li>
				<li><span>Name:</span> ${data.name}</li>
				<li><span>Location:</span> ${data.location}</li>
				<li><span>Country:</span> ${data.country}</li>
				<li><span>Latitude:</span> ${data.latitude}</li>
				<li><span>Longitude:</span> ${data.longitude}</li>
				<li><span>Handler's site:</span><br> <a href='${data.website}'>${data.website}</a></li>			
				`

					list.innerHTML = lInfo
		})
		.catch(err => console.error(err));


		const metar = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com',
				'X-RapidAPI-Key': '4d6ecc08fbmsh4b36dbb74d831efp15fe8ajsn9f92fe369271'
			}
		};
		
		fetch(`https://aerisweather1.p.rapidapi.com/observations/${input}`, metar)
			.then(response => response.json())
			.then(data => {			
				met = `
				<li class='title'> ${data.response.dataSource}</li>
				<li><span>RAW:</span><br> ${data.response.raw}</li>
				<li><span>Flight rule:</span> ${data.response.ob.flightRule}</li>
				<li><span>Sunrise:</span>  ${data.response.ob.sunriseISO}</li>
				<li><span>Sunset:</span> ${data.response.ob.sunsetISO}</li>
				`
				metarInfo.innerHTML = met
			})
			.catch(err => console.error(err));
}


