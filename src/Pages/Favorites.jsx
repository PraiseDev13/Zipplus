import "../Css/Favorites.css"
import { useMovieContext} from "../contexts/MovieContext";
import MovieCard from "../Components/MovieCard";
function Favorites() {
    const {Favorites} = useMovieContext();

    if(Favorites) {
        return  <div className="movies-grid">
         {Favorites.map((movie) => (
         <MovieCard key={movie.id}  movie={movie}/>
               
            ))}
            </div>
    }
    return ( 
        <>
        <div  className="favorites-header">
            <h2>Your Favorites</h2>
        </div>
        <div className="favorites-empty">
            <h2>No favorite Movies Yet</h2>
            <p>start adding movies to your favorites! and they will appear here.</p>
    
        </div>
        </>
     );
}

export default Favorites;