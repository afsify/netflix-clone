import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../constants/constants";
import Youtube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.urls)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch(() => {
        alert("new error");
      });
  }, [props.urls]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Array Empty");
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <div>
            <img
              onClick={() => handleMovie(obj.id)}
              className={props.isSmall ? "smallPoster " : "poster"}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="post"
            />
            <p style={{ marginTop: "0.7rem" }}>{obj?.title || obj?.name}</p>
          </div>
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
