import React from "react";
import "./style.css";
const Card = (props) => {
  
  const { id, name, category, image, likes, description, price } = props.item;
      
  return (

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
                <span className="card-tag subtle" onClick={() => props.handleLike(id)}>
                 {props.toggleLike ? "Unlike" : "Like"}
                </span>
                <span className="card-tag subtle">{likes}</span>
              </div>
            </div>
          </div>
  )
}

export default Card