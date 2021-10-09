import './App.css';
import React, { useState } from "react";

export default function App() {
  const movies = [
    {
      name: "Soorarai Pottru",
      movie_pic:
        "https://m.media-amazon.com/images/M/MV5BOGVjYmM0ZWEtNTFjNi00MWZjLTk3OTItMmFjMDAzZWU1ZDVjXkEyXkFqcGdeQXVyMTI2Mzk1ODg0._V1_.jpg",
      desc:
        "Inspired by the book 'Simply Fly', the film tells the story of Nedumaaran Rajangam known to friends as Maara, the son of a teacher, who sets out to make the common man fly and takes on the most capital intensive industry in the world with the help of his friends, family and sheer will power."
    },
    {
      name: "Asuran",
      movie_pic:
        "https://m.media-amazon.com/images/M/MV5BMTQ3YWY1MzQtNDA3OC00MDY1LTk3ZmMtMzNjZmFjY2FhYWNhXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg",
      desc:
        "Asuran is an action film directed by Vetrimaaran, with the story taken from the novel Vekkai written by Poomani, a famous Tamil novelist. Dhanush plays two roles in this film. Famous Malayalam actress Manju Warrier plays the female lead. Many people expecting this movie will be the benchmark for Tamil cinema in both critically and commercially. Trailer of this film was released on Dhanush's birthday and the film was released on 3 October 2019."
    },
    {
      name: "Thani Oruvan",
      movie_pic:
        "https://m.media-amazon.com/images/M/MV5BOTc3OWQzYjUtNmRiMi00MGUwLWI4ODEtMjU4YWRiYjBlM2Y1XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
      desc:
        "Thoroughly frustrated with Industrialists and Politicians ruining the nation by denying the availability of cheap medicines, IPS officer Mithran is on a self-conceived quest to find the head of this medicine-mafia to channel all his anger towards him. But the ultimate villain, Siddharth Abhimanyu, who is also a decorated Scientist proves to be a ruthless and indomitable adversary"
    }
  ];

  const [name,setMoviename] = new useState("");
  const [movie_pic,setMovieimage] = new useState("");
  const [desc,setMovidesc] = new useState("");
  const [add_movie,setAddmovie] = new useState(movies);
  const newmve = {name,movie_pic,desc};

  return (
    <div className="App">
      <input type="text" placeholder="Enter Movie Name" onChange={event=>setMoviename(event.target.value)}></input>
      <input type="text" placeholder="Paste Movie Image URL" onChange={event=>setMovieimage(event.target.value)}></input>
      <input type="text" placeholder="Enter Movie Description" onChange={event=>setMovidesc(event.target.value)}></input>
      <button className="Movie_add_btn" onClick={()=>setAddmovie([...add_movie,newmve])}>Add Movie</button>
      {add_movie.map((mve,index) => (
        <Display name={mve.name} key={index} image={mve.movie_pic} movie_desc={mve.desc} />
      ))}
    </div>
  );
  function Display({ name, image, movie_desc }) {
    return (
      <div className="Moviebox">
        <img
          className="Movie_img"
          src={image}
          width="500"
          height="600"
          alt=""
        />
        <Counter />
        <h1 className="Movie_name">{name}</h1>
        <p className="Movie_Desc">{movie_desc}</p>
      </div>
    );
  }

  function Counter() {
    const [like, setLike] = new useState(0);
    const [Dislike, setDislike] = new useState(0);
    return (
      <div className="buttons">
        <button className="btn" onClick={() => setLike(like + 1)}>
          👍{like}
        </button>
        <button className="btn" onClick={() => setDislike(Dislike + 1)}>
          👎{Dislike}
        </button>
      </div>
    );
  }

  function Delete(){
    return(
      <div>
      <button>Delete Movie</button>
      </div>
    )
  }
}


