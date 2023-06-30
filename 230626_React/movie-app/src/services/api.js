const MOVIE_API = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`;

export const movieDataFetch = async () => {
	try {
		const response = await fetch(MOVIE_API);
		if (!response.ok) {
			throw new Error("네트워크 응답이 원활하지 않습니다.");
		}
		const jsonData = await response.json();
		console.log(jsonData);
		return jsonData.data.movies;
	} catch (error) {
		console.log(error);
		return [];
	}
};
