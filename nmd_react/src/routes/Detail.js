import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Detail() {
  //Detail.js에 가서 useParams()를 사용 -> 이함수를 사용하면  React Router은 바로 이 변수의 값을 넘겨줌 
  const { id } = useParams();
  const getMovie = async () => { 
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json)
  }
  useEffect(() => {
    getMovie();
  }, []);

  
  return (
    <h1>Detail</h1>
  )
}
 
export default Detail;