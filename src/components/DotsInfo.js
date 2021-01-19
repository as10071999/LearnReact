import React from "react";
import { Link } from "react-router-dom";
import AddImage from "../AddImage";

export default function DotsInfo({
  dots,
  height,
  width,
  deleteDot,
  pid,
  count,
  increaseCount,
}) {
  return (
    <ul>
      {dots.map((dot, i) => {
        return (
          <>
            <li>
              <p>
                Dot {i} <button onClick={() => deleteDot(i)}>Remove</button>
              </p>
              <p>
                Coordinates: x: {dot.x}, y: {dot.y}
              </p>
              <button>Add Sensor</button>
              <Link to={`/image/${pid}`}>
                <button>Add Image</button>
              </Link>
            </li>
          </>
        );
      })}
    </ul>
  );
}
