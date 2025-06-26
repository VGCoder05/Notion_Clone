import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import tools from "./Tools";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBlocksForActivePage,
  selectActivePageId,
} from "../store/selectors";
import { updateBlock } from "../store/reducer/dataSlice";

const Text_Editor = () => {
  const editorRef = useRef(null);
  const ejInstance = useRef(null);
  const previousPageId = useRef(null); // 🧠 To track if page changed

  const blocksOfActivePg = useSelector(selectBlocksForActivePage);
  const activePageId = useSelector(selectActivePageId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!editorRef.current) return;

    // Only reinitialize when the page is changed
    if (previousPageId.current === activePageId) return;
    previousPageId.current = activePageId;

    // Destroy previous editor instance
    if (ejInstance.current) {
      ejInstance.current.destroy();
      ejInstance.current = null;
    }
    console.log(blocksOfActivePg);
    const existingBlocks = Array.isArray(blocksOfActivePg)
      ? [...blocksOfActivePg]
      : [];

    let blocksWithEmptyParagraph;
    if (existingBlocks) {
      blocksWithEmptyParagraph = [
        ...(Array.isArray(existingBlocks[0]) ? existingBlocks[0] : []),
        { type: "paragraph", data: { text: "" } },
      ];
    } else {
      blocksWithEmptyParagraph = [{ type: "paragraph", data: { text: "" } }];
    }

    ejInstance.current = new EditorJS({
      holder: editorRef.current,
      placeholder: "Start writing your page...",
      autofocus: true,
      tools: tools,
      data: { blocks: blocksWithEmptyParagraph },
    });

    return () => {
      ejInstance.current?.destroy();
      ejInstance.current = null;
    };
  }, [activePageId]);

  const handleSave = async () => {
    try {
      await ejInstance.current.isReady;
      const output = await ejInstance.current.save();

      if (output?.blocks?.length) {
        dispatch(updateBlock(output.blocks));
      } else {
        console.log("No blocks to save.");
      }
    } catch (err) {
      console.error("Save failed:", err);
    }
  };

  return (
    <div>
      <div ref={editorRef}></div>

      <button onClick={handleSave}>Save</button>
      {/* <button onClick={test}>test</button> */}
    </div>
  );
};

export default Text_Editor;
