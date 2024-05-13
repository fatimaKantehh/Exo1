import { useState, useEffect } from "react";
function MovieList() {
    const [movies, setMovies] = useState([]);
    useEffect(async () => {
        const response = await fetch("movies");
        const movies = await response.json();
        setMovies(movies);
    }, []);
    return (
        <div>
            <h1>Liste des FILMS</h1>
            <ul>
                {movies.map(movie => {
                    return  (<li key={movie.id}> 
                                {movie.title} - {movie.releaseYear}
                            </li>);
                })}
            </ul>
        </div>);
}
export default MovieList;