import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import tools from './Tools'
import { useDispatch, useSelector } from "react-redux";
import { selectBlocksForActivePage } from "../store/selectors";
import { updateBlock } from "../store/reducer/dataSlice";

const Text_Editor = () => {
  const editorRef = useRef(null);
  const ejInstance = useRef(null);
  const blocksOfActivePg = useSelector(selectBlocksForActivePage);
  const dispatch = useDispatch();

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
      // console.log("Saved data: ", output);
      let data = { ...output.blocks};
      // console.log(data);      
      dispatch(updateBlock(data));
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
