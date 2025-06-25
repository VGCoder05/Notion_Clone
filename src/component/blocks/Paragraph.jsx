import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// Import your Redux action for updating block content
// import { updateBlockContent } from '../yourSlice'; //  Example

const ParagraphBlock = ({ block, pageId }) => {
  // Function to automatically resize the textarea based on content
  function autoResizeTextarea(textarea) {
    textarea.style.height = "auto"; // Reset the height to auto
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height based on scrollHeight
  }

  const dispatch = useDispatch();

  const [text, setText] = useState(block.content);

  // Update local state if block content changes from Redux
  useEffect(() => {
    setText(block.content);
  }, [block.content]);

  const handleChange = (e) => {
    setText(e.target.value);
    autoResizeTextarea(event.target); // Resize the textarea according to text enter in textarea.
  };

  const handleBlur = (event) => {
    // Dispatch update only when user finishes editing (on blur) or use a debounce mechanism for more frequent updates
    if (text !== block.content) {
      // dispatch(updateBlockContent({ pageId, blockId: block.id, newContent: text }));
      // console.log("Dispatch update for block:", block.id, "new content:", text);
    }

  };

  return (
    <div className="block paragraph-block" style={block.properties}>
      <textarea
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Type '/' for commands..."
        rows={1}
        style={{
          padding: "2px 0",
          width: "100%",
          border: "none",
          outline: "none",
          resize: "none",
          fontSize: "inherit",
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
};


export default ParagraphBlock;


