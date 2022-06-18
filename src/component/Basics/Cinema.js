import React, {useState } from "react";
import "./style.css";
import Movie from "./movieApi";
import MovieCard from "./movieCard";
import Card from "./Card";
import Navbar from "./Navbar";

const Cinema = () => {
  const [menuList, setMenuList] = React.useState(Movie);
  const [toggleLike, setToggleLike] = useState(false);

  const handleLike = (id) => {
    if(toggleLike) {
      setMenuList(prevMovie =>  prevMovie.map(item => 
        item.id === id ?
        {...item, likes: item.likes - 1}
        : item))
        setToggleLike(false)
    } else {
      setMenuList(prevMovie =>  prevMovie.map(item => 
        item.id === id ?
        {...item, likes: item.likes + 1}
        : item))
        setToggleLike(true)

    }
      
  }

  function compare_like(a, b){
    // a should come before b in the sorted order
    if(a.likes > b.likes){
            return -1;
    // a should come after b in the sorted order
    }else if(a.likes < b.likes){
            return 1;
    // a and b are the same
    }else{
            return 0;
    }
}
  
  return (
    <div>
      <Navbar />
      <section className="main-card--cointainer">
      {menuList.sort(compare_like).map((item) => {
        return<Card key={item.id} item={item} handleLike={handleLike} toggleLike={toggleLike}/>
      }
        
      )}
      </section>
    </div>
  );
};

export default Cinema;
