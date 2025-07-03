import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import tools from "./tools/Tools";
import renderBlock from "./blocks/blocks_render";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBlocksForActivePage,
  selectActivePageId,
  selectCompData,
  selectBlocksForPage,
} from "../store/selectors";
import { updateBlock } from "../store/reducer/dataSlice";

const Text_Editor = () => {
  const editorRef = useRef(null);
  const ejInstance = useRef(null);
  const previousPageId = useRef(null); // 🧠 To track if page changed

  const blocksOfActivePg = useSelector(selectBlocksForActivePage);
  const activePageId = useSelector(selectActivePageId);
  const compData = useSelector(selectCompData);
  // const blocks = useSelector(selectBlocksForPage);
  const dispatch = useDispatch();
  console.log(blocksOfActivePg);

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

    // // helper function for image
    // function toBase64(file) {
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.onload = () => resolve(reader.result);
    //     reader.onerror = reject;
    //     reader.readAsDataURL(file);
    //   });
    // }

    return () => {
      ejInstance.current?.destroy();
      ejInstance.current = null;
    };
  }, [activePageId]);

  useEffect(() => {
    const handleSlashCommand = (e) => {
      if (e.key === "\\") {
        const inputListener = (e2) => {
          if (e2.key === "Enter") {
            const value = e.target.value;
            if (value.trim() === "\\link" && ejInstance.current) {
              ejInstance.current.blocks.insert("linkTool");
              e2.preventDefault();
            }
            e.target.removeEventListener("keydown", inputListener);
          }
        };

        document.activeElement.addEventListener("keydown", inputListener);
      }
    };

    document.addEventListener("keydown", handleSlashCommand);

    return () => {
      document.removeEventListener("keydown", handleSlashCommand);
    };
  }, []);

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

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(compData));
  }, [compData]);

  return (
    <div>
      <div ref={editorRef}></div>
      {blocksOfActivePg.map((block, index) => (
        <div key={index}>{renderBlock(block)}</div>
      ))}
      <button onClick={handleSave}>Save</button>
      {/* <button onClick={test}>test</button> */};
    </div>
  );
};

export default Text_Editor;

// const [bills, setBills] = useState(() => {
//   const saved = localStorage.getItem("invoiceData");
//   return saved ? JSON.parse(saved) : [];
// });
