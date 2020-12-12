import React,{useState,useEffect} from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

function Banner() {
   const [movie, setMovie] = useState([])

   useEffect(() => {
       async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals)
        console.log(Math.floor(Math.random() * request.data.results.length -1))
        // console.log(request.data.results[Math.floor(Math.random() * request.data.results.length -1)])
        setMovie(
            request.data.results[Math.floor(Math.random() * request.data.results.length -1)]
        )
        return request
       }
       fetchData();
   }, [])

   console.log('this is',movie)
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            {/* Background Img */}
            <div className="banner_contensts">
            <h1 classname="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            {/* div > 2 buttons */}
            <div className="banner_buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">MyList</button>

            </div>
            {/* description */}
            <h1 className="banner__description">{movie?.overview}</h1>
            </div>
            {/* title */}
           <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
