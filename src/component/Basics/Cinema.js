import React from "react";
import "./style.css";
import Movie from "./movieApi";
import MovieCard from "./movieCard";
import Navbar from "./Navbar";
const uniqueList = [
  ...new Set(
    Movie.map((currEle) => {
      return currEle;
    })
  ),
];

const Cinema = () => {
  const [menuList, setMenuList] = React.useState(uniqueList);
  console.log(menuList);
  menuList.sort((e,b) => e.likes > b.likes ? console.log(e): console.log(b));
  return (
    <div>
      <Navbar />
      <MovieCard menuD={menuList} />
    </div>
  );
};

export default Cinema;
