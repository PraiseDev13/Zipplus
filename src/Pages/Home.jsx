import MovieCard from "../Components/MovieCard"
import {useState, useEffect} from 'react'
import { searchMovies,getPopularMovies } from '../Services/api'
import "../Css/Home.css"
function Home() {
    
    const [searchQuery, setSearchQuery] = useState('')
    const [movies, setMovies] = useState([])
 const [loading, setLoading] = useState(null)
 const [error, setError] = useState(true)
        useEffect(() => {
             const loadPopularMovies = async () => {
                try {
                    const popularMovies = await getPopularMovies()
                    setMovies(popularMovies)
                } catch(err) {
                    console.log(err)
               setError('failed too load movies....')
                }

                finally {
                    setLoading(false)
                }
             }
             loadPopularMovies()
        }, [])
        
   async function handleSubmit(e) {
     e.preventDefault();
       if (!searchQuery.trim()) return


       if(loading) return 
       setLoading(true)
       try{
        const  searchResult = await searchMovies(searchQuery)
        setMovies(searchResult)
        setError(null)
       }
       catch(err) {
        console.log(err)
          setError("failed to search movies.... ")
       }
       finally {
        setLoading(false)
       }
    }
    return(
       
        <div className="home">
            <form onSubmit={handleSubmit} className="search-form">
                <input type="text" placeholder="search for a movie" className="search-input"
                value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)}/>
            
            <button type="submit" className="search-button bg-gray-500 text-white-500">Search</button>
            </form>


{error && <div className="error-message">{error}</div>}

            {loading ? <div className="loading">loading...</div> : <div className="movies-grid">
 {movies.map((movie) => (
            movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard key={movie.id}  movie={movie}/>
               
            ))}
            </div>}
           
           
        </div>
    )

}
export default Home;