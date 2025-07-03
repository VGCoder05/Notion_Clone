import React from "react";

const blocks_render = (block) => {
  switch (block.type) {
    case "paragraph":
      return <p>{block.data.text}</p>;

    case "header":
      return <h2>{block.data.text}</h2>;

    case "internalPageLink":
      return renderInternalPageLink(block.data);
      
    case "quote":
      return console.log(block.data);

    case "delimiter":
      return console.log(block.data);

    case "list":
      return console.log(block.data);

    case "checklist":
      return console.log(block.data);

    case "image":
      return console.log(block.data);

    case "code":
      return console.log(block.data);

    case "attaches":
      return console.log(block.data);

    default:
      return null;
  }
};

export default blocks_render;
