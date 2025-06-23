import React from "react";
import ParagraphBlock from "./blocks/Paragraph";
// import HeadingBlock from "./blocks/HeadingBlock";
// import TodoBlock from "./blocks/TodoBlock";
// ... import other block components

const BlockRenderer = ({ block, pageId }) => {
  switch (block.type) {
    case "paragraph":
      return <ParagraphBlock block={block} pageId={pageId} />;
    case "heading":
      return <HeadingBlock block={block} pageId={pageId} />;
    case "todo":
      return <TodoBlock block={block} pageId={pageId} />;
    // Add cases for 'image', 'code', 'bulleted-list-item', etc.
    default:
      console.warn(`Unsupported block type: ${block.type}`, block);
      return (
        <div
          style={{ border: "1px dashed red", padding: "10px", margin: "5px 0" }}
        >
          Unsupported block type: {block.type}
        </div>
      );
  }
};

export default BlockRenderer;
