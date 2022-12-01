import { Route, Switch } from 'react-router-dom';
import MovieDetails from '.../MoveiDetails';


function Movies({ movies }) {

  console.log(movies)

  return (
    <div className='comp orange'>
      <h1>Movies Component</h1>
      <nav>
        {movies.map(movie => (
          <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
        ))}
      </nav>
      <Switch>
        <Route path='/movies/:movieId'>
          <Movie Details movies={movies}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
