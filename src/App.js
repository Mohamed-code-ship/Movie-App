import{ useState,useEffect } from "react";
import './App.css';
import SearchIcon from './Search.svg';
import MovieCard from "./MovieCard";


//41c35162


const API_URL = 'http://www.omdbapi.com?apikey=41c35162' 

const Movie1 = {
    "Poster" : "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
    "Title": "Superman, Spiderman or Batman",
    "Type": "movie",
    "Year": "2011",
    "imdbID":"tt2084949"
}
const App = () => {
    const [movies,setMovies]= useState([]);
    const[searchTerm,setSearchTerm] = useState();

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL} &s=${title}`)
        const data = await response.json()

        setMovies(data.Search);
    } 

    useEffect(()=>{
        searchMovies('Spiderman');
    },[]);

    return(
        <div className="App">
            <h1>Movie Land </h1>

        <div className=" search">
            <input
            placeholder = "Search for movies"
            value= {searchTerm}
            onChange = {(e) => setSearchTerm(e.target.value)}
            />
            <img 
            src={SearchIcon}
            alt="Search"
            onClick={()=> searchMovies(searchTerm)}
            />


        </div>


        {movies?.length > 0
            ?
            (
        
            <div className="Container">
                 {movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                 ) )}
            </div>
            ) : (
                <div className="empty">
                    <h2>No movies found </h2>
                </div>

            )}
</div>
    );
}
export default App;
