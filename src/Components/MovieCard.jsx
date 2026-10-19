import "../Css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)
   
    function onFavourClick (e) {
     e.preventDefault()
     if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }
    return (
       <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/> 
            <div className="movie-overlay">
              {/*   <button className={`favorite-button ${favorite ? "active" : "" } `} onClick={onFavourClick}>Add to Watchlist</button> */}
                </div>    
        </div>
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
       </div>
    )
}
export default MovieCard