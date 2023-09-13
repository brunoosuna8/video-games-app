async function fetchData (){
	let apiKey = 'a677d8c618f04fe4931b57a7e275ed36'
	let apiUrl = `https://api.rawg.io/api/games?key=${apiKey}`
	
	try {
		const response = await fetch(apiUrl)
		if(!response.ok){
			throw new Error(`error en :${response.status}`)
		}
		const data = await response.json();
		console.log(data)
		return data
	} catch (error) {
		console.error('error',error)
		return null
	}
	
};
async function getSingleGame(id){
	let apiKey = 'a677d8c618f04fe4931b57a7e275ed36'
	let apiUrl = `https://api.rawg.io/api/games/${id}?key=${apiKey}`
	
	try {
		const response = await fetch(apiUrl)
		if(!response.ok){
			throw new Error(`error en :${response.status}`)
		}
		const data = await response.json();
		console.log(data)
		return data
	} catch (error) {
		console.error('error',error)
		return null
	}
	
};
module.exports = {fetchData,getSingleGame}


  