import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// Import your Redux action for updating block content
// import { updateBlockContent } from '../yourSlice'; //  Example

const ParagraphBlock = ({ block, pageId }) => {
  const dispatch = useDispatch();
  // Local state for editing to avoid dispatching on every keystroke
  const [text, setText] = useState(block.content);

  // Update local state if block content changes from Redux (e.g., collaborative editing)
  useEffect(() => {
    setText(block.content);
  }, [block.content]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    // Dispatch update only when user finishes editing (on blur)
    // Or use a debounce mechanism for more frequent updates
    if (text !== block.content) {
      // dispatch(updateBlockContent({ pageId, blockId: block.id, newContent: text }));
      console.log("Dispatch update for block:", block.id, "new content:", text); // Placeholder
    }
  };

  // For simplicity, using a textarea. For rich text, you'd use contentEditable
  // or a library like Slate.js, Draft.js, TipTap.
  return (
    <div className="block paragraph-block" style={block.properties}>
      {" "}
      {/* Apply styles from properties */}
      <textarea
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Type '/' for commands..." // Notion-like placeholder
        rows={1} // Auto-grow textarea is a common feature
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          resize: "none",
          padding: "2px 0",
          fontSize: "inherit",
        }}
      />
    </div>
  );
};

export default ParagraphBlock;
