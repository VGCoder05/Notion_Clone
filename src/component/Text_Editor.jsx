import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import tools from './Tools'

const Text_Editor = () => {
  const editorRef = useRef(null);
  const ejInstance = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    ejInstance.current = new EditorJS({
      holder: editorRef.current,
      placeholder: "Start writing your page...",
      autofocus: true,
      tools,
    });

    return () => {
      ejInstance.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  const handleSave = async () => {
    try {
      const output = await ejInstance.current.save();
      console.log("Saved data: ", output);
    } catch (err) {
      console.error("Save failed: ", err);
    }
  };

  return (
    <div>
      <div ref={editorRef}></div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Text_Editor;
