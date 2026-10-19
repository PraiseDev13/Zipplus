
const API_KEY = "8ce38bfda25f388f0988e53c90a2fe43";

const BASE_URL ="https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}


export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movies?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
}