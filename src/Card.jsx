import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="cardImg">
          <img src={props.imgSrc} alt="myPic" className="card_img" />
        </div>

        <div className="card_info">
          <span className="desc">{props.title}</span>
          <h3 className="card_title">{props.sname}</h3>
          <a href={props.link} className="watchBtn" target="_blank">
            <button className="btn btn-success ">Watch Now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
