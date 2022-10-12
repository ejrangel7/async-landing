const content = null || document.getElementById("content");
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=8';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '25b7a36b94msh461d396813532acp13608ejsn909663418d32',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
	const response = await fetch(urlApi,options);
	const data = response.json();
	return data;
}

(async () => {
	try {
		const videos = await fetchData(API);
		let view = `
		${videos.items.map(video => `
			<div class="group relative">
			<div
				class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
				<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
			</div>
			<div class="mt-4 flex justify-between">
				<h3 class="text-sm text-gray-700">
				<span aria-hidden="true" class="absolute inset-0"></span>
				${video.snippet.title}
				</h3>
			</div>
			</div>
		`).join('')}`;
		content.innerHTML = view;
	} catch (error) {
		console.log(error);
		//mostrar en pantalla un aviso
	}
})();