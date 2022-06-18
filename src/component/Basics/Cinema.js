import React, { useState } from "react";
import "./style.css";
import Movie from "./movieApi";
import MovieCard from "./Card";
import Card from "./Card";
import Navbar from "./Navbar";

const Cinema = () => {
  const [menuList, setMenuList] = React.useState(Movie);

  const [displayLike, setDisplayLike] = useState([
    { id: 1, like: "like", state: false },
    { id: 2, like: "like", state: false },
    { id: 3, like: "like", state: false },
    { id: 4, like: "like", state: false },
    { id: 5, like: "like", state: false },
    { id: 6, like: "like", state: false },
  ]);

  //handles the like functions
  const addLike = (id) => {
    setDisplayLike((prevLike) =>
      prevLike.map((lik) =>
        lik.id === id ? { ...lik, like: "Unlike", state: true } : lik
      )
    );

    setMenuList((prevMovie) =>
      prevMovie.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };
  const subtractLike = (id) => {
    setDisplayLike((prevLike) =>
      prevLike.map((lik) =>
        lik.id === id ? { ...lik, like: "like", state: false } : lik
      )
    );
    setMenuList((prevMovie) =>
      prevMovie.map((item) =>
        item.id === id ? { ...item, likes: item.likes - 1 } : item
      )
    );
  };
  const handleLike = (id) => {
    const content = displayLike.find((item) => item.id === id);
    console.log(content.state);
    if (content.state === false) {
      addLike(id);
    } else {
      subtractLike(id);
    }
  };

  function compare_like(a, b) {
    // a should come before b in the sorted order
    if (a.likes > b.likes) {
      return -1;
      // a should come after b in the sorted order
    } else if (a.likes < b.likes) {
      return 1;
      // a and b are the same
    } else {
      return 0;
    }
  }

  return (
    <div>
      <Navbar />
      <section className="main-card--cointainer">
        {menuList.sort(compare_like).map((item) => {
          return (
            <Card
              key={item.id}
              item={item}
              handleLike={handleLike}
              displayLike={displayLike}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Cinema;
