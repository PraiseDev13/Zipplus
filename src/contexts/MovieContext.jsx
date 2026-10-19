
import { createContext , useState , useContext, useEffect} from "react";
import { Children } from "react";
const MovieContext = createContext() 

export  const useMovieContext = () => useContext(MovieContext)

export const movieProvider = ((Children) => {
    const {favorites , setFavorites} = useState([])

    useEffect(() => {
        const storeFavs = LocalStorage.getItem('favorites')
        if (storeFavs) {
            setFavorites(JSON.parse(storeFavs))
        }
    }, [])

    useEffect(() => {
localStorage.setItem('favorites', JSON.stringify(favorites))
}, [favorites])



const addToFavorites = (movie) => {
setFavorites(prevFavorites => [...prevFavorites, movie])
}

const removeFromFavorites = (movieId) => {
    setFavorites(prevFavorites => prevFavorites.filter(movie => movie.id !== movieId))
}

const isFavorite = (movieId) => {
    return favorites.some(movie => movie.id === movieId)
}

const value = {
favorites,
isFavorite,
removeFromFavorites,
addToFavorites

}
return <MovieContext.Provider value={value}>
    {Children}
</MovieContext.Provider>
} );