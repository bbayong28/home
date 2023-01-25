import { useEffect, useState } from 'react';

function App() { 
  const [loading, setLoading] = useState(true);
  const [movies, setMovie] = useState([]);
  const getMovies = async () => {
    const json = await (
    await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    ).json();
    //const json = await response.json();
    setMovie(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [])
  

//    fetch(
//      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
//    )
//      .then((response) => response.json())
//      .then((json) => {
//        setMovie(json.data.movies);
//        setLoading(false);
//        });
//  }, []);
  console.log(movies);
  return (
    <div>
      {/* map함수는 새로운 array를 만듦 */}
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          {
            movies.map((movie) => (
              <div key={movie.id}>
                <img src={movie.medium_cover_image} />
                  <h2>{movie.title}</h2>   
                  <p>{movie.summary}</p>
                  <ul>
                    {movie.genres?.map((g) => (
                      <li key={g}>
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
            ))}
        </div>
      )}
    </div>
  )
}


export default App;