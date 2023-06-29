import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const getRandomImageUrl = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index]?.urls?.small || "";
};

export default function Bilder({ city }) {
  const key = "";
  const [res, setRes] = useState(null);

  useEffect(() => {
    async function getPicture() {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${key}`
        );
        setRes(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getPicture();
  }, [city]);

  return (
    <div>
      {res && (
        <img
          src={getRandomImageUrl(res.results)}
          alt={res.results[0]?.alt_description}
          style={{
            width: "350px",
            height: "auto",
            marginBottom: 20,
            marginTop: 20,
          }}
        />
      )}
    </div>
  );
}
