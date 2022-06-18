import React, { useState } from "react";
import "./style.css";
const movieCard = ({ menuD }) => {
  
  // let store = [];
  return (
    <section className="main-card--cointainer">
      {menuD.map((item) => {
        const { id, name, category, image, likes, description, price } = item;
        const [like, uselike] = useState(true);
        const [min, setMin] = useState(likes);
        const [unlike, setUnlike] = useState("Like");


        const onClick = () => {
          if (like) {
            setMin(min+1);
            setUnlike("UnLike");
            uselike(false);
          } else {
            setUnlike("like");
            uselike(true);
            setMin(min-1);
          }
        };
        
      
        return (
          <>
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle">{category}</span>
                  <span className=" flex card-number card-circle subtle">
                    {price}
                  </span>
                  <h5 className="card-title">{name}</h5>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">Watch</div>
                </div>
                <div className="display-flex">
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag subtle" onClick={onClick}>
                    {unlike}
                  </span>
                  <span className="card-tag subtle">{min}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default movieCard;
