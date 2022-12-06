import React from "react";

export default function CardImage({ img }) {
  return <img src={img} alt="img" />;
}
/**
 * Original code before destructing
 * import React from "react";

export default function CardImage(props) {
  return <img src={props.img} />;
}
 */
